const express = require("express");
const path = require('path');

import {getConfig} from "./server";

export const router = express.Router();

router.get('/some_page', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/some_page.html'));
    console.log("client req");
});

router.get('/operator_page', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    console.log("operator req");
});

router.get('/setconfig', function (req, res) {
    res.json(getConfig());
});

router.post('/settings', function (req, res) {
    console.log(req.body);
    fs.writeFile('public/chat_settings.json', JSON.stringify(req.body), 'utf8', () => {});
    res.json(req.body);
});

