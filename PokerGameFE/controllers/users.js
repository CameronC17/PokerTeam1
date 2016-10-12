var express = require("express");
var Users = express();


Users.post("localhost:3000/api/users/login", function(req, res) {
    console.log(req);
});


module.exports = Users;