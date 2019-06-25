const express = require('express');
const WebSocket = require('ws');
// import express from 'express';

const PORT = 9004;

let app = express();

app.use(express.static('public'));

// app.get('/', function (req, res) {
//     res.send('Hello');
// });

app.listen(PORT, function () {
    console.log('web started on ' + PORT);
});

const wss = new WebSocket.Server({port: PORT + 1});
console.log(`ws started on ${PORT + 1}`);
wss.on('connection', ws => {
    console.log('connected!!');
    ws.on('message',message => {
        console.log(`Received message => ${message}`);
        if(message && JSON.parse(message).message){
            setTimeout(() =>{
                ws.send(formingMsgJSON(JSON.parse(message).message.toUpperCase(), 'upperBot'));
            }, 5000);
        }
    });
    ws.on('close', () =>{
        console.log('disconnect(');
    });
});

function formingMsgJSON(msg, fromWho) {
    return JSON.stringify({
        message : msg,
        fromWho : fromWho,
        date : new Date().toString()
    });
}

function formingMsg(msg, fromWho) {

    let time = (new Date()).toLocaleDateString() + ' ' + (new Date()).toLocaleTimeString('ru');
    let fromWhoClass = fromWho + '-article';
    let msgText =
        `<article class="${fromWhoClass}">` +
            `<p>${msg}</p>` +
            '<p class="sender-datetime">' +
                `<span class="sender">${fromWho} </span>`+
                `<span class="datetime">${time}</span>`+
            '</p>' +
        '</article>';

    let outMsg = {
        userMessage : msgText
    };
    return JSON.stringify(outMsg);
}