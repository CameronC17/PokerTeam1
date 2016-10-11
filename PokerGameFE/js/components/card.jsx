var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Card = React.createClass({

  render: function() {

  return (
        <div className="card">
          <p>{this.props.suit}</p>

        </div>
  )
}
});

module.exports= Card;
