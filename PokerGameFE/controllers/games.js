var querystring = require('querystring');
var express = require("express");
var http = require("http");
var Sessions = express();

function joinPool(req, res) {
    var postData = querystring.stringify({
        'output_format': 'json',
        'user': req.body.user
    });

    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/games/new',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    }

    var data = '';

    var request = http.request(options, function(response) {
        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function() {
            console.log('Body' + data);
            res.send(data);
        });
    })
    request.write(postData);
    request.end();
}

function controlGame(req, res) {
    var postData = querystring.stringify({
        'output_format': 'json',
        'user': req.body.user, 
        'bet': req.body.bet, 
        'call': req.body.call, 
        'check': req.body.check, 
        'fold': req.body.fold
    });

    console.log("POST DATA" + postData);

    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/games',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        }
    }

    var data = '';

    var request = http.request(options, function(response) {
        response.on('data', function(chunk) {
            data += chunk;
        });

        response.on('end', function() {
            console.log('Body' + data);
            res.send(data);
        });
    })
    request.write(postData);
    request.end();
}

module.exports = {
    join: joinPool,
    control: controlGame
}