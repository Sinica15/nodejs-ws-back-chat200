const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

import {PORT} from "../server";
import {operatorsMap, clientsMap} from "../server";
import {Client, Operator} from "./persons";
import {cond, notifyOperators} from "./usefulFunctions";

export function wsStart() {
    const wss = new WebSocket.Server({port: PORT + 1});
    cond(`ws started on ${PORT + 1}`);

    wss.on('connection', ws => {
        cond('connected');

        ws.on('message', message => {
            cond(`Received message: ${message}`);
            if(operatorsMap.has(ws.uuid) || clientsMap.has(ws.uuid)){
                if(clientsMap.has(ws.uuid)){
                    let client = clientsMap.get(ws.uuid);
                    let clientMsg = JSON.parse(message);
                    if (clientMsg.msgType == 'service'){
                        //TODO clients service handler
                    } else {
                        client.sendMsgInterlocutor(clientMsg);
                    }
                } else {
                    let operator = operatorsMap.get(ws.uuid);
                    let operatorMsg = JSON.parse(message);
                    //operator action handler
                    if (operatorMsg.msgType == 'service'){
                        let action = operatorMsg.action.split(' ');
                        if (action[0] == 'client'){
                            cond(`some client action ${action[1]}`);
                            operator[action[1]](clientsMap.get(operatorMsg.message));
                            notifyOperators();
                        } else {
                            cond(`operator command: ${action[0]} ${operatorMsg.message}`);
                            try{
                                operator[action[0]](operatorMsg.message);
                            }catch (e) {
                                cond(`some problem: ${e}`);
                            }
                        }
                    } else {
                        if (operator.currentStaus == 'free'){

                        } else {
                            operator.sendMsgInterlocutor(operatorMsg);
                        }
                    }
                }
            } else {
                //registration or authorization
                if (JSON.parse(message).msgType == 'service'){
                    if (JSON.parse(message).action == 'registration'){
                        let uuid = uuidv1();
                        ws.uuid = uuid;
                        if (JSON.parse(message).message == 'operator'){
                            operatorsMap.set(uuid, new Operator(ws, uuid));
                            notifyOperators();
                            cond('reg operator');
                        } else {
                            clientsMap.set(uuid, new Client(ws, uuid));
                            notifyOperators();
                            cond('reg client');
                        }
                    } else {
                        //todo authorization for operators
                    }

                }
            }

        });

        ws.on('close', () =>{
            if (clientsMap.has(ws.uuid)) {
                let client = clientsMap.get(ws.uuid);
                cond(`client ${client.uuid} disconnect`);
                if (client.interlocutor !== undefined) client.interlocutor.disconnectClient();
                clientsMap.delete(ws.uuid);
                notifyOperators()
            } else {
                let operator = operatorsMap.get(ws.uuid);
                cond(`operator ${operator.uuid} disconnect`);
                if (operator.interlocutor !== undefined) operator.disconnectClient();
                operatorsMap.delete(ws.uuid);
                notifyOperators();
            }
        });
    });
}

