var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Table = require('./table.jsx');


var Game = React.createClass({

  handleStart: function(){
      appDispatcher.dispatch({
        action: Constants.LOAD_PAGE,
        page: event.target.id
      });
  },

  render: function() {

  return (
    <div className="game">
      <Table />
        <div className="seat" id="seat1">
          <p className="playerseat">Player1</p>
        </div>
        <div className="seat" id="seat2">
          <p className="playerseat">Player2</p>
        </div>
        <div className="seat" id="seat3">
          <p className="playerseat">Player3</p>
        </div>
        <div className="seat" id="seat4">
          <p className="playerseat">Player4</p>
        </div>
        <div className="seat" id="seat5">
          <p className="playerseat">Player5</p>
        </div>
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
