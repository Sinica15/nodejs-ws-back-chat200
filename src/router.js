const express = require("express");
import {generalPath} from "../server";
import {cond, getConfig} from "./usefulFunctions";
import {clientsMap, operatorsMap} from "../server";
import {mapToArr} from "./usefulFunctions";

export const router = express.Router();

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

router.post('/settings', function (req, res) {
    cond(req.body);
    fs.writeFile(generalPath + '/public/chat_settings.json', JSON.stringify(req.body), 'utf8');
    res.json(req.body);
});

router.get('/debuginfo', function (req, res) {
    cond('get debug info');
    res.send(JSON.stringify({
        clients : mapToArr(clientsMap),
        operators : mapToArr(operatorsMap)
    }));
});

