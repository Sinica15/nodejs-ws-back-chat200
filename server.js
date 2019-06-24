const express = require('express');
// import express from 'express';

let app = express();

app.use(express.static('public'));

// app.get('/', function (req, res) {
//     res.send('Hello');
// });

app.listen(9004, function () {
    console.log('started on 9004');
});