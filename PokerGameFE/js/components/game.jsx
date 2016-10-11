var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Table = require('./table.jsx');
var Seat= require('./seat.jsx');


var Game = React.createClass({

  handleStart: function(){
      appDispatcher.dispatch({
        action: Constants.START_GAME,
        page: event.target.id
      });
  },
  handleCheck: function(){
      appDispatcher.dispatch({
        action: Constants.ACTION_CHECK
      });
  },

  render: function() {

  return (
    <div className="game">
        <Table />
        <Seat />
        <div className="gamecontent">


            <div id="gamebuttons">
                <label htmlFor="stake">Stake:</label><br />
                <input id="option1" type="button" name="stake" value="100" /> edds<br />
                <input id="option2" type="button" name="stake" value="50" /> edds<br />
                <input id="option3" type="button" name="stake" value="20" /> edds<br />
                <input id="stake" type="number" name="stake" placeholder="Stake" required /><br />
                <button type="button" id="check" onClick={this.handleCheck}>Check</button>
                <button type="button" id="fold" onClick={this.handleFold}>Fold</button>
                <button type="button" id="bet" onClick={this.handleBet}>Bet</button>
                <button type="button" id="call" onClick={this.handleCall}>Call</button>
                <button type="button" id="start" onClick={this.handleStart}>Start</button>
            </div>
        </div>
    </div>
  )
}
});

module.exports= Game;
