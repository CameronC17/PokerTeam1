var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Login = React.createClass({

  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },

  handleLogin: function () {

    appDispatcher.dispatch({
      action: Constants.LOGIN_ACTION,
      user: {
        username: this.state.username,
        password: this.state.password
      }
    });
  },

  handlePasswordChange: function (e) {

    this.setState({
      password: e.target.value
    });
  },
  handleUsernameChange: function (e) {

    this.setState({
      username: e.target.value
    });
  },

  render: function () {

    return (
      <div className="form-content">
        <h1>Login to your PokerBalmz account</h1>
        <div className="form-container">

          <form className="loginform">
            <div className="message" id="register-msg">
            </div>
            <div className="message" id="login-msg">
            </div>
            <div>
              <input type="text" className="username" id="username" placeholder="Username" onChange={this.handleUsernameChange} required />
            </div>
            <div>
              <input type="password" id="password" className="password" placeholder="Password" onChange={this.handlePasswordChange} required />
            </div>
            <input type="button" value="Login" id="login-button" onClick={this.handleLogin} />
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Login;
