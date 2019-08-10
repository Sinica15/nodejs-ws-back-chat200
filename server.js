const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

import {router} from "./router";

const PORT = 9004;

let app = express();

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', router);

export function getConfig() {
    let configPath = 'public/chat_settings';
    let readJsonConfig = path => JSON.parse(fs.readFileSync(path, 'utf8'));
    if (fs.existsSync(configPath + '.json'))
        return readJsonConfig(configPath + '.json');
    else
        return readJsonConfig(configPath + '_default.json');
}

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
                let config = getConfig();
                ws.send(formingMsgJSON('Ответ на "' + JSON.parse(message).message.toUpperCase() + '"', config['bot_name']));
            }, 2500);
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