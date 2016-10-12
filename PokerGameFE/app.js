var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');
var react = require("react");
var router = require("./config/routes");

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/api', router);

app.listen(3001);

console.log("Running at Port 3001");