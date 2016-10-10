var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var NavBar = require('./navbar.jsx');
var Homepage = require('./homepage.jsx');
var Login = require('./login.jsx');
var Register = require('./register.jsx');
var Game = require('./game.jsx');
var Store = require('../stores/store.js');

var Page = React.createClass({

    componentDidMount : function() {

        Store.CurrentPage.on('update' , this.handleUpdate);

    },
    
    getInitialState: function() {
        var page = Store.CurrentPage.getPage();

        return {
            currentPage: page
        }
    },

    handleUpdate : function() {
        this.setState({
            currentPage: Store.CurrentPage.getPage()
        })
    },

    render: function() {
        switch (this.state.currentPage) {
            case "homepage":
                return (<Homepage/>)
                break;
            case "registerpage":
                return (<Register/>)
                break;
            case "loginpage":
                return (<Login/>)
                break;
            case "gamepage":
                return (<Game/>)
                break;
            default:
                return (<Homepage/>)
                break;
        } 
    }
});

module.exports = Page;
