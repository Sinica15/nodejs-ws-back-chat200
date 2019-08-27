const WebSocket = require('ws');
const uuidv1 = require('uuid/v1');

import {PORT} from "../server";
import {operatorsMap, clientsMap} from "../server";
import {Client, Operator} from "./persons";
import {cond, notifyOperators} from "./usefulFunctions";

import {OperatorModel} from "./models/OperatorModel";
import {ClientModel} from "./models/ClientModel";

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
                        if (clientMsg.action == 'response action'){
                            // cond(clientMsg.message);
                            client.addServiceMsgInHistory(clientMsg.message);
                        }
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
                            cond(`some client action: ${action[1]}`);
                            operator[action[1]](clientsMap.get(operatorMsg.message));
                        } else {
                            cond(`operator command: ${action[0]} ${operatorMsg.message}`);
                            if (action[0] == 'ip-api' || action[0] == 'geoip-db' && clientsMap.has(operatorMsg.message)) {
                                clientsMap.get(operatorMsg.message).sendServiceMsg(action[0]);
                            }
                            try{
                                operator[action[0]](operatorMsg.message);
                            }catch (e) {
                                cond(`some problem: ${e}`);
                            }
                        }
                    } else {
                        if (operator.currentStatus == 'free'){

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
                        let msg = JSON.parse(message).message.split(' ');
                        ws.uuid = uuid;
                        console.log(``)
                        if (msg[0] == 'operator'){
                            const operator = new Operator(ws, uuid);
                            operatorsMap.set(uuid, operator);
                            console.log(`add operator: ${operatorsMap.get(uuid)}`);
                            new OperatorModel({
                                uuid : operator.uuid,
                                connectionTime : operator.connectionTime
                            }).save();
                            notifyOperators();
                            cond('reg operator');
                        } else {
                            const client = new Client(ws, uuid, msg[1]);
                            clientsMap.set(uuid, client);
                            new ClientModel({
                                uuid : client.uuid,
                                connectionTime : client.connectionTime
                            }).save();
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
                ClientModel.findOne({uuid : client.uuid}, (err, client) => {
                    if (err) cond(err);
                    client.online = false;
                    client.save( err => {
                        if (err) cond(err);
                    });
                });
                notifyOperators()
            } else {
                let operator = operatorsMap.get(ws.uuid);
                cond(`operator ${operator.uuid} disconnect`);
                if (operator.interlocutor !== undefined) operator.disconnectClient();
                operatorsMap.delete(ws.uuid);
                OperatorModel.findOne({uuid : operator.uuid}, (err, operator) => {
                    if (err) cond(err);
                    operator.online = false;
                    operator.save( err => {
                        if (err) cond(err);
                    });
                });
                notifyOperators();
            }
        });
    });
}

