var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Chips= require('./chips.jsx');
var PlayerCards= require('./playerCards.jsx');

var Player = React.createClass({

  render: function() {

  return (
        <div className="player">
          <Chips />
          <PlayerCards index={this.props.index} />
        </div>
  )
}
});

module.exports= Player;
