const express = require("express");
const fs = require("fs");

import {generalPath} from "../server";
import {cond, getConfig} from "./usefulFunctions";
import {clientsMap, operatorsMap} from "../server";
import {mapToArr} from "./usefulFunctions";

export const router = express.Router();

router.use('/', (req, res, next) => {
    // cond(JSON.stringify(req.json));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin");
    next();
});

router.get('/some_page', function (req, res) {
    res.sendFile(generalPath + '/public/some_page.html');
    cond("client req");
});

router.get('/operator_page', function (req, res) {
    res.sendFile(generalPath + '/public/index.html');
    cond("operator req");
});

router.get('/setconfig', function (req, res) {
    res.json(getConfig());
});

router.post('/setconfig', function (req, res) {
    cond(JSON.stringify(req.body));
    cond(JSON.stringify(req.headers));
    if (JSON.stringify(req.body) !== undefined)
        fs.writeFile(generalPath + '/public/chat_settings.json', JSON.stringify(req.body), 'utf8', () => {});
    res.json(req.body);
});

router.get('/debuginfo', function (req, res) {
    cond('get debug info');
    res.send(JSON.stringify({
        clients : mapToArr(clientsMap),
        operators : mapToArr(operatorsMap)
    }));
});

