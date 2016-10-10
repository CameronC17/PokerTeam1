var EventEmitter = require('events').EventEmitter;
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Constants = require('../constants/constants.js');
var merge = require('merge');

var _tcards = [
];

var _pcards = [
];

var _pchips = [
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

appDispatcher.register(handleAction);
function handleAction(payload){
  if(payload.action == Constants.LOAD_PAGE) {
    _currentPage = payload.page;
    CurrentPage.emit('update');
  }
}

module.exports ={
  TCardStore: TCardStore,
  PCardStore: PCardStore,
  PChipStore: PChipStore,
  CurrentPage: CurrentPage
};
