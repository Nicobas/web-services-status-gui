const nocache = require('nocache');
const express = require('express');

const app = express();

const helper = require('./lib/helper');
let config = require('./config');

let services = [];

helper.extractServices(config.services, services, 0);

app.set('view engine', 'pug');

app.get('/:id([0-9]+)', nocache(), (req, res, next) => {
    if (services[req.params.id]) {
        const service = services[req.params.id];

        switch (service.type) {
            case 'http':
                helper.httpStatus(service.host, (isAlive) => {
                    req.isAlive = isAlive;
                    next();
                });
                break;
            case 'ping':
                helper.pingStatus(service.host, (isAlive) => {
                    req.isAlive = isAlive;
                    next();
                });
                break;
            default:
                res.status(500).send('Error: config.js');
        }
    }
    else
        res.status(404).send();
}, (req, res) => {

    const options = {
        root: __dirname + '/img/',
    };

    const fileName = req.isAlive ? 'status_green.png' : 'status_red.png';

    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/', function (req, res) {
    res.render('index', { services: config.services});
});

app.listen(config.port, function () {
    console.log('Listening on port ' + config.port)
});
