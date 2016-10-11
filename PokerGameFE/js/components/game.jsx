var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Table = require('./table.jsx');
var Seat= require('./seat.jsx');


var Game = React.createClass({

    getInitialState: function () {
      return {
        stake: 0
      }
    },

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
  handleFold: function(){
      appDispatcher.dispatch({
        action: Constants.ACTION_FOLD
      });
  },
  handleCall: function(){
      appDispatcher.dispatch({
        action: Constants.ACTION_CALL
      });
  },
  handleBet: function(){
      appDispatcher.dispatch({
        action: Constants.ACTION_BET,
        bet: this.state.stake
      });
  },
  handleStake: function(event){
    var edd= event.target.value;
    appDispatcher.dispatch({
      action: Constants.ACTION_BET,
      bet: edd

    });
    console.log(event.target.value);
  },
  handleStakeChange: function (e) {

    this.setState({
      stake: e.target.value
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
                <input id="option1" type="button" name="stake" value="100" onClick={this.handleStake} /> edds<br />
                <input id="option2" type="button" name="stake" value="50" onClick={this.handleStake} /> edds<br />
                <input id="option3" type="button" name="stake" value="20" onClick={this.handleStake} /> edds<br />
                <input id="stake" type="number" name="stake" placeholder="Stake" onChange={this.handleStakeChange} required /><br />
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
