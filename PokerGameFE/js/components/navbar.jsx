var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var NavBar = React.createClass({

  render: function() {

  return (
    <div className="navbar">
        <img src="https://s14.postimg.org/9xlpzodz5/logo.png" alt="Logo" id="logo"></img>
        <div id="custom-msg">

        </div>
        <div id="links">
            <a className="button" id="homepage">Home</a>
            <a className="button" id="registerpage">Register</a>
            <a className="button" id="loginpage">Login</a>
            <a className="button" id="gamepage">Game</a>
        </div>
    </div>
  )
}
});

module.exports= NavBar;
