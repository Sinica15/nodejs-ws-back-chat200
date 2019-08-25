const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

import {router} from "./src/router";
import {wsStart} from "./src/webSocket";
import {mongoConnect} from "./src/dbConnect";
import {cond} from "./src/usefulFunctions";

export const PORT = 9004;
export const generalPath = path.join(__dirname);
export let operatorsMap = new Map();
export let clientsMap = new Map();
export let debMode = true;

let app = express();

app.use(bodyParser.json()); // parse application/json

app.use(express.static('public'));
app.use('/', router);

mongoConnect().then(
    () => {
        app.listen(PORT, function () {
            cond('web started on ' + PORT);
        });
        wsStart();
    },
    err => cond(`some problems with db: ${err}`)
);
