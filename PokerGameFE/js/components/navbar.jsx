var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var NavBar = React.createClass({

  handleClick: function(event) {
    appDispatcher.dispatch({
      action: Constants.LOAD_PAGE,
      page: event.target.id
    });
  },

  render: function() {

  return (
    <div className="navbar">
        <img src="https://s14.postimg.org/9xlpzodz5/logo.png" alt="Logo" id="logo"></img>
        <div id="custom-msg">

        </div>
        <div id="links">
            <a className="button" id="homepage" onClick={this.handleClick}>Home</a>
            <a className="button" id="registerpage" onClick={this.handleClick}>Register</a>
            <a className="button" id="loginpage" onClick={this.handleClick}>Login</a>
            <a className="button" id="gamepage" onClick={this.handleClick}>Game</a>
        </div>
    </div>
  )
}
});

module.exports= NavBar;
