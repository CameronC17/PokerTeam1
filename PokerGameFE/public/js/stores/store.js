var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');
const emitter= new EventEmitter();
emitter.setMaxListeners (100);

var gameStage= 0;


var _tcards = [];

var _pcards = [];

var _pchips = [];

var _currentPlayer= 0;


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

    getPChips: function(index) {
        return _pchips[index]
    }

});

var CurrentPage = merge(EventEmitter.prototype, {

    getPage: function() {
        return _currentPage
    }

});
var CurrentPlayer = merge(EventEmitter.prototype,{
    getPlayer: function(){
      return _currentPlayer
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
               console.log(result);
                _currentPlayer= result.data.turn;
               if (result.data.cards.length > 0) {
                   _tcards = result.data.cards;
               }

               if (result.data.chips != null) {
                   _pchips = result.data.chips;
               }

               
               TCardStore.emit('update');
               PCardStore.emit('update');
           });

    }
    else if (payload.action == Constants.ACTION_FOLD) {
      var result= axios.post("http://localhost:3000/api/games", {user: window.localStorage.user, bet: false, call: false, check: false, fold: true})
           .then(function(result){
             _currentPlayer= result.data.turn;
              if (result.data.chips != null) {
                   _pchips = result.data.chips;
               }
              TCardStore.emit('update');
              PCardStore.emit('update');
              console.log("fold");
           });

    }
    else if (payload.action == Constants.ACTION_CALL) {
      var result= axios.post("http://localhost:3000/api/games", {user: window.localStorage.user, bet: false, call: true, check: false, fold: false})
           .then(function(result){
               console.log(result);
             _currentPlayer= result.data.turn;
              if (result.data.chips != null) {
                   _pchips = result.data.chips;
               }
              TCardStore.emit('update');
              PCardStore.emit('update');
              console.log("call");
           });

    }
    else if (payload.action == Constants.ACTION_BET) {
      var result= axios.post("http://localhost:3000/api/games", {user: window.localStorage.user, bet: payload.bet, call: false, check: false, fold: false})
           .then(function(result){
                if (result.data.chips != null) {
                   _pchips = result.data.chips;
                }
                _currentPlayer= result.data.turn;
                TCardStore.emit('update');
                PCardStore.emit('update');
                console.log("bet");
           });

    }
    else if (payload.action == Constants.START_GAME) {
      var result= axios.post("http://localhost:3000/api/games/new", {user: window.localStorage.user})
           .then(function(result){
                if (result.data.chips != null) {
                   _pchips = result.data.chips;
                }
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
        CurrentPlayer: CurrentPlayer,
        CurrentPage: CurrentPage
    };