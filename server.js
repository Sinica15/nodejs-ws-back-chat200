const express = require('express');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

const PORT = 9004;

let app = express();

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/settings', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/settings.html'));
    console.log("settings doing");
    // res.sendFile('public/settings.html');
});

app.get('/setconfig', function (req, res) {
    res.json(getConfig());
});

function getConfig() {
    let configPath = 'public/chat_settings';
    let readJsonConfig = path => JSON.parse(fs.readFileSync(path, 'utf8'));
    if (fs.existsSync(configPath + '.json'))
        return readJsonConfig(configPath + '.json');
    else
        return readJsonConfig(configPath + '_default.json');
}

app.post('/settings', function (req, res) {
    console.log(req.body);
    fs.writeFile('public/chat_settings.json', JSON.stringify(req.body), 'utf8', () => {});
    res.json(req.body);
});

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