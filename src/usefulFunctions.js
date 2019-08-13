const fs = require('fs');
import {debMode, generalPath, operatorsMap} from "../server";

export function cond(msg) {
    if (debMode) console.log(`[debMode] ${msg}`);
}

export function getConfig() {
    let configPath = generalPath + '/public/chat_settings';
    let readJsonConfig = path => JSON.parse(fs.readFileSync(path, 'utf8'));
    if (fs.existsSync(configPath + '.json'))
        return readJsonConfig(configPath + '.json');
    else
        return readJsonConfig(configPath + '_default.json');
}

export function formingMsgJSON(msg, fromWho) {
    return JSON.stringify({
        message : msg,
        fromWho : fromWho,
        date : new Date().toString()
    });
}

export function mapToArr(map) {
    let out = [];
    map.forEach((value, key) => {
        if (value instanceof Map)
            out[key] = mapToArr(value);
        else {
            let newObj = {};
            for (let kuy in value) {
                if (kuy != 'ws') {
                    newObj[kuy] = value[kuy];
                }
            }
            if (newObj.interlocutor !== undefined) newObj.interlocutor = newObj.interlocutor.uuid;
            out.push(newObj);
        }
    });
    return out
}

export function notifyOperators() {
    cond('notifying operators');
    operatorsMap.forEach(operator =>{operator.getClientsList()});
}