var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var ChipList= require('./chipList.jsx');
var PlayerCards= require('./playerCards.jsx');

var Player = React.createClass({

  render: function() {

  return (
        <div className="player">
          <ChipList index= {this.props.index} />
          <PlayerCards index={this.props.index} />
        </div>
  )
}
});

module.exports= Player;
