var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var NavBar = require('./navbar.jsx');
var Homepage = require('./homepage.jsx');
var Login = require('./login.jsx');
var Register = require('./register.jsx');
var Game = require('./game.jsx');

var Page = React.createClass({
    getInitialState: function() {
        return null;
    },

    render: function() {
        var dummyPage = 0;

        switch (dummyPage) {
            case 0:
                return (<Homepage/>)
                break;
            case 1:
                return (<Register/>)
                break;
            case 2:
                return (<Login/>)
                break;
            case 3:
                return (<Game/>)
                break;
            default:
                return (<Homepage/>)
                break;

        }
    }
});

module.exports = Page;
