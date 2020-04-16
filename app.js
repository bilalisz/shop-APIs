const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connetion = require('./Config/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    if (connetion) {
        console.log('server is running on port no 3000');
    } else {
        console.log('connection is not estiblished !');
    }
});