import {cond, formingMsgJSON, getConfig, mapToArr, notifyOperators} from "./usefulFunctions";
import {clientsMap, operatorsMap} from "../server";

function Person(ws, uuid) {
    this.ws = ws;
    this.uuid = uuid;
    this.connctionTime = parseInt(new Date().getTime());
    this.interlocutor = undefined;
    this.currentStaus = 'free';
    this.nick = 'Person';
    this._type = 'person';
}
Person.prototype = {
    _statuses : ['in conversation', 'free'],
    sendServiceMsg(action, msg) {
        let message = msg === undefined ? '': msg;
        this.ws.send(
            JSON.stringify({
                msgType : 'service',
                action : action,
                message : message
            })
        );
    },

};



//====== Client ====== //
export function Client(ws, uuid) {
    Person.call(this, ws, uuid);
    this.nick = 'Client';
    this._type = 'client';
    this.messageHistory = [];
    this.unreadMsgs = 0;
}
Client.prototype = Object.create(Person.prototype);
Client.prototype.constructor = Client;
Client.prototype.echoResponse = function (message) {
    setTimeout(() =>{
        let config = getConfig();
        this.ws.send(formingMsgJSON('Ответ на "' + message.toUpperCase() + '"', config['bot_name']));
    }, 2500);
};
Client.prototype.sendMsgInterlocutor = function (msg) {
    let name = this._type == this.nick.toLowerCase() ? this.nick : (this._type + ' ' +this.nick) ;
    let message = {
        message : msg.message,
        fromWho : name,
        date : parseInt(new Date().getTime()),
    };
    this.messageHistory.push(message);
    if (this.currentStaus == 'free') {
        this.echoResponse(msg.message);
        this.countingUnreadMsg();
    } else
        this.interlocutor.ws.send(JSON.stringify(message));
    notifyOperators();
};
Client.prototype.countingUnreadMsg = function () {
    ++this.unreadMsgs;
};



//====== Operator ====== //
export function Operator(ws, uuid) {
    Person.call(this, ws, uuid);
    this.nick = 'Operator';
    this._type = 'operator';
}
Operator.prototype = Object.create(Person.prototype);
Operator.prototype.constructor = Operator;
Operator.prototype.connectClient = function (Client) {
    if (
        Client === undefined ||
        Client.currentStaus == 'in conversation' ||
        operatorsMap.has(Client.uuid)
    ) {
        cond(`wrong client selected`);
        return 0;
    }
    Client.currentStaus = 'in conversation';
    this.currentStaus = 'in conversation';
    if (this.interlocutor !== undefined) {
        this.interlocutor.currentStaus = 'free';
        this.interlocutor.interlocutor = undefined;
    }
    Client.interlocutor = this;
    this.interlocutor = Client;
    setTimeout(() => {
        this.interlocutor.unreadMsgs = 0;
        notifyOperators();
    }, 1500 );
};
Operator.prototype.disconnectClient = function () {
    this.interlocutor.currentStaus = 'free';
    this.currentStaus = 'free';
    this.interlocutor.interlocutor = undefined;
    this.interlocutor = undefined;
};
Operator.prototype.getClientsList = function () {
    this.sendServiceMsg('getClientsList',
        JSON.stringify({
            clients : mapToArr(clientsMap),
            operators : mapToArr(operatorsMap),
            sendingTime : new Date(),
        })
    );
};
Operator.prototype.sendMsgInterlocutor = function (msg) {
    if (this.interlocutor !== undefined && this.currentStaus == 'in conversation') {
        let name = this._type == this.nick.toLowerCase() ? this.nick : (this._type + ' ' +this.nick) ;
        let message = {
            message : msg.message,
            fromWho : name,
            date : parseInt(new Date().getTime()),
        };
        this.interlocutor.ws.send(JSON.stringify(message));
        this.interlocutor.messageHistory.push(message);
        notifyOperators();
    }
};
Operator.prototype.readInterlocutorMsgs = function () {
    if (this.interlocutor !== undefined) {
        this.interlocutor.unreadMsgs = 0;
        notifyOperators();
    }
};

