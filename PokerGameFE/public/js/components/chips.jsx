var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Store= require('../stores/store.js');

var Chips = React.createClass({
  render: function() {
    
  return (
        <div className="chips">
          <div className="edds" id="chips">
          <p id="eddValue"> {this.props.value}</p>
          </div>
        </div>
  )
}
});

module.exports= Chips;
