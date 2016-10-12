var querystring = require('querystring');
var express = require("express");
var http = require("http");
var Sessions = express();

function createSession(req, res) {
    var postData = querystring.stringify({
        'output_format': 'json',
        'username': req.body.username,
        'password': req.body.password
    });

    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/users/login',
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
    //new: newSession,
    create: createSession
    //delete: deleteSession
};