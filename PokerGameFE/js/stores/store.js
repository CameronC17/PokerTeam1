var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');


var gameStage= 0;

var dummyTCards = [{
    suit: "\u2666",
    cardValue: "2"
}, {
    suit: "\u2666",
    cardValue: "10"
}, {
    suit: "\u2666",
    cardValue: "K"
}];

var dummyPCards = [
    [{
        suit: "\u2666",
        cardValue: "6"
    }, {
        suit: "\u2665",
        cardValue: "3"
    }],
    [{
        suit: "\u2666",
        cardValue: "K"
    }, {
        suit: "\u2660",
        cardValue: "Q"
    }],
    [{
        suit: "\u2666",
        cardValue: "K"
    }, {
        suit: "\u2666",
        cardValue: "Q"
    }],
    [{
        suit: "\u2665",
        cardValue: "K"
    }, {
        suit: "\u2666",
        cardValue: "Q"
    }],
    [{
        suit: "\u2663",
        cardValue: "K"
    }, {
        suit: "\u2666",
        cardValue: "Q"
    }]
];

var _tcards = [];

var _pcards = [];

var _pchips = [];

var _users = [{
    username: "laura",
    password: "laura"
}, {
    username: "edd",
    password: "edd"
}];

var _currentPage = "Homepage";

var TCardStore = merge(EventEmitter.prototype, {

    getTCards: function() {
        return _tcards
    }

});

var PCardStore = merge(EventEmitter.prototype, {

    getPCards: function(index) {
        return _pcards[index]
    }

});

var PChipStore = merge(EventEmitter.prototype, {

    getPChips: function() {
        return _pchips
    }

});

var CurrentPage = merge(EventEmitter.prototype, {

    getPage: function() {
        return _currentPage
    }

});

appDispatcher.register(handleAction);

function handleAction(payload) {
    if (payload.action == Constants.LOAD_PAGE) {
        console.log(payload.action);
        _currentPage = payload.page;
        CurrentPage.emit('update');
    }
    else if (payload.action == Constants.LOGIN_ACTION) {
        var result= axios.post("http://localhost:3000/api/users/login", {username: payload.user.username, password: payload.user.password})
             .then(function(result){
                console.log(result.status);
                if(result.status== 200){
                  window.localStorage.setItem('user', result.data.user);
                  window.localStorage.setItem('username', result.data.username);
                 _currentPage = "gamepage";
                  console.log(_currentPage);
                }
                CurrentPage.emit('update');
             });
    }
    else if (payload.action == Constants.REGISTER_ACTION) {
      var result= axios.post("http://localhost:3000/api/users", {username: payload.user.username, password: payload.user.password})
           .then(function(result){
              console.log(result.status);
              if(result.status== 201){
               _currentPage = "loginpage";
                console.log(_currentPage);
              }
              CurrentPage.emit('update');
           });
    }
    else if (payload.action == Constants.ACTION_CHECK) {
      var result= axios.post("http://localhost:3000/api/games", {user: window.localStorage.user, bet: false, call: false, check: true, fold: false})
           .then(function(result){
               if (result.data.cards.length > 0) {
                   _tcards = result.data.cards;
                   TCardStore.emit('update');
               }
           });

    }
    else if (payload.action == Constants.START_GAME) {
      var result= axios.post("http://localhost:3000/api/games/new", {user: window.localStorage.user})
           .then(function(result){

             _pcards = result.data;
             PCardStore.emit('update');
             console.log(result);
           });
    }

    }

    module.exports = {
        TCardStore: TCardStore,
        PCardStore: PCardStore,
        PChipStore: PChipStore,
        CurrentPage: CurrentPage
    };
