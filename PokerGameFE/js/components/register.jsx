var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Register = React.createClass({

  render: function() {

  return (
    <div className="form-content">
        <h1>Register a PokerBalmz account</h1>
        <div className="form-container">

            <form className="registerform">
              <div className="message" id="registerpage-msg">

              </div>
                <div>
                    <input type="text" className="username" id="registerusername" placeholder="Username" required />
                </div>
                <div>
                    <input type="password" className="password" id="registerpassword" placeholder="Password" required />
                </div>
                <input type="button" value="Register" id="register-button" onClick={this.handleRegister} />
            </form>
        </div>
    </div>
  )
}
});

module.exports= Register;
