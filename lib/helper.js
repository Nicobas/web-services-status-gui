const request = require('request');
const ping = require('ping');

const config = require('../config');

module.exports.extractServices = (services, array, counter) => {
    services.forEach((item) => {
        if (item.services) {
            counter = this.extractServices(item.services, array, counter);
        }

        item.id = counter++;
        array.push(item);
    });

    return counter;
};

module.exports.httpStatus = (host, cb) => {
    request(host, {timeout: config.http_timeout * 1000}, function (err, res) {
        if (err)
            cb(false);
        else if (res.statusCode >= 500)
            cb(false);
        else
            cb(true);
    });
};

module.exports.pingStatus = (host, cb) => {
    ping.sys.probe(host, function(isAlive){
        cb(isAlive);
    }, {timeout: config.ping_timeout});
};