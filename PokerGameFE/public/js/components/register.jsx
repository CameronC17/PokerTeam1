var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Register = React.createClass({

  getInitialState: function () {
    return {
      username: '',
      password: ''
    }
  },

  handleRegister: function () {

    appDispatcher.dispatch({
      action: Constants.REGISTER_ACTION,
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

  render: function() {

  return (
    <div className="form-content">
        <h1>Register a PokerBalmz account</h1>
        <div className="form-container">

            <form className="registerform">
              <div className="message" id="registerpage-msg">

              </div>
                <div>
                    <input type="text" className="username" id="registerusername" placeholder="Username" onChange={this.handleUsernameChange} required  />
                </div>
                <div>
                    <input type="password" className="password" id="registerpassword" placeholder="Password" onChange={this.handlePasswordChange} required />
                </div>
                <input type="button" value="Register" id="register-button" onClick={this.handleRegister} />
            </form>
        </div>
    </div>
  )
}
});

module.exports= Register;
