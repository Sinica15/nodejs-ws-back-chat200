import {cond, formingMsgJSON, getConfig, mapToArr, notifyOperators} from "./usefulFunctions";
import {clientsMap, operatorsMap} from "../server";
import {ClientModel} from "./models/ClientModel";
import {OperatorModel} from "./models/OperatorModel";

function Person(ws, uuid) {
    this.ws = ws;
    this.uuid = uuid;
    this.connectionTime = parseInt(new Date().getTime());
    this.interlocutor = undefined;
    this.currentStatus = 'free';
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
export function Client(ws, uuid, nick) {
    Person.call(this, ws, uuid);
    this.nick = 'Client';
    // this.nick = nick || 'Client';
    this._type = 'client';
    this.messageHistory = [];
    this.serviceMsgsHistory = [];
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
    if (this.currentStatus == 'free') {
        this.echoResponse(msg.message);
        this.countingUnreadMsg();
    } else this.interlocutor.ws.send(JSON.stringify(message));
    ClientModel.findOne({uuid : this.uuid}, (err, client) =>{
        client.messageHistory.push(message);
        client.save(err => {
            if(err) cond(err)
        });
    });
    notifyOperators();
};
Client.prototype.addServiceMsgInHistory = function (msg) {
    let response;
    try {
        response = JSON.parse(JSON.parse(msg).response);
    } catch (e) {
        cond(`response problem: ${e}`);
        response = JSON.parse(msg).response;
    }
    let message = {
        message : response,
        date : parseInt(new Date().getTime()),
    };
    this.serviceMsgsHistory.push(message);
    ClientModel.findOne({uuid : this.uuid}, (err, client) =>{
        client.serviceMsgsHistory.push(message);
        client.save(err => {
            if(err) cond(err)
        });
    });
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
        Client.currentStatus == 'in conversation' ||
        operatorsMap.has(Client.uuid)
    ) {
        cond(`wrong client selected`);
        return 0;
    }
    Client.currentStatus = 'in conversation';
    this.currentStatus = 'in conversation';
    if (this.interlocutor !== undefined) {
        this.interlocutor.currentStatus = 'free';
        this.interlocutor.interlocutor = undefined;
    }
    Client.interlocutor = this;
    this.interlocutor = Client;
    setTimeout(() => {
        this.interlocutor.unreadMsgs = 0;
        notifyOperators();
    }, 1500 );
    OperatorModel.findOne({uuid : this.uuid}, (err, operator) => {
        operator.currentStatus = 'in conversation';
        operator.save(err => {
            if (err) cond(err);
        });
    });
    ClientModel.findOne({uuid : this.interlocutor.uuid}, (err, client) => {
        client.currentStatus = 'in conversation';
        client.unreadMsgs = 0;
        client.save(err => {
            if(err) cond(err)
        });
    });
};
Operator.prototype.disconnectClient = function () {
    this.interlocutor.currentStatus = 'free';
    this.currentStatus = 'free';
    OperatorModel.findOne({uuid : this.uuid}, (err, operator) => {
        operator.currentStatus = 'free';
        operator.save(err => {
            if (err) cond(err);
        });
    });
    ClientModel.findOne({uuid : this.interlocutor.uuid}, (err, client) => {
        client.currentStatus = 'free';
        client.save(err => {
            if(err) cond(err)
        });
    });
    this.interlocutor.interlocutor = undefined;
    this.interlocutor = undefined;
    notifyOperators();
};
Operator.prototype.getClientsList = function () {
    console.log('send clients');
    this.sendServiceMsg('getClientsList',
        JSON.stringify({
            clients : mapToArr(clientsMap),
            operators : mapToArr(operatorsMap),
            sendingTime : new Date(),
        })
    );
};
Operator.prototype.sendMsgInterlocutor = function (msg) {
    if (this.interlocutor !== undefined && this.currentStatus == 'in conversation') {
        let name = this._type == this.nick.toLowerCase() ? this.nick : (this._type + ' ' +this.nick) ;
        let message = {
            message : msg.message,
            fromWho : name,
            date : parseInt(new Date().getTime()),
        };
        this.interlocutor.ws.send(JSON.stringify(message));
        this.interlocutor.messageHistory.push(message);
        ClientModel.findOne({uuid : this.interlocutor.uuid}, (err, client) =>{
            client.messageHistory.push(message);
            client.save(err => {
                if(err) cond(err)
            });
        });
        notifyOperators();
    }
};
Operator.prototype.readInterlocutorMsgs = function () {
    if (this.interlocutor !== undefined) {
        this.interlocutor.unreadMsgs = 0;
        ClientModel.findOne({uuid : this.interlocutor.uuid}, (err, client) =>{
            client.unreadMsgs = 0;
            client.save(err => {
                if(err) cond(err)
            });
        });
        notifyOperators();
    }
};

