var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');

var dummyTCards=[
  {
    suit: "&#9830",
    cardvalue: 2
  },
  {
    suit: "&#9830",
    cardvalue: 10
  },
  {
    suit: "&#9830",
    cardvalue: "K"
  }
];

var _tcards = [
];

var _pcards = [
];

var _pchips = [
];

var _users= [
  {
    username: "laura",
    password: "laura"
  },
  {
    username: "edd",
    password: "edd"
  }
];

var _currentPage= "Homepage";

var TCardStore = merge(EventEmitter.prototype , {

  getTCards : function() {
    return _tcards
  }

});

var PCardStore = merge(EventEmitter.prototype , {

  getPCards : function() {
    return _pcards
  }

});

var PChipStore = merge(EventEmitter.prototype , {

  getPChips : function() {
    return _pchips
  }

});

var CurrentPage = merge(EventEmitter.prototype , {

  getPage : function() {
    return _currentPage
  }

});

// loadpage: function(){
//    var self= this;
//    axios.get("http://localhost:3000/api/users/login")
//         .then(function(result){
//           self.setState({
//             username: result.data,
//             password: result.data
//           })
//         });
//     },

appDispatcher.register(handleAction);

function handleAction(payload){
  if(payload.action == Constants.LOAD_PAGE) {
    console.log(payload.action);
    _currentPage = payload.page;
    CurrentPage.emit('update');
  }
  else if(payload.action == Constants.LOGIN_ACTION) {
    for (var i= 0; i < _users.length; i++){
      console.log(payload.user, _users[i]);
      if(payload.user.username == _users[i].username && payload.user.password == _users[i].password){
        _currentPage = "gamepage";
        console.log(_currentPage);
      }
    }
    CurrentPage.emit('update');
    return {status: true};
  }

  else if(payload.action == Constants.REGISTER_ACTION) {
      console.log(payload.user, _users[i]);
      _users.push(payload.user);
      _currentPage = "loginpage";
      console.log(_currentPage);

      CurrentPage.emit('update');
      return {status: true};
  }
  else if (payload.action == Constants.START_GAME){
    _tcards = dummyTCards;
    TCardStore.emit('update');

  }

}

module.exports ={
  TCardStore: TCardStore,
  PCardStore: PCardStore,
  PChipStore: PChipStore,
  CurrentPage: CurrentPage
};
