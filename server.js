import {cond} from "./src/usefulFunctions";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

import {router} from "./src/router";
import {wsStart} from "./src/webSocket";

export const PORT = 9004;
export const generalPath = path.join(__dirname);
export let operatorsMap = new Map();
export let clientsMap = new Map();
export let debMode = true;

let app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/', router);



app.listen(PORT, function () {
    cond('web started on ' + PORT);
});

wsStart();