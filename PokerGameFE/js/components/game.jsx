var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Game = React.createClass({

  render: function() {

  return (
    <div className="game">
        <div class="table">
            <table>
                <tr class="top">
                    <td id="top-left">
                    </td>
                    <td id="top-middle">
                      <div class="deck">
                      <div class="deck-card">
                      </div>
                    </div>
                    </td>
                    <td id="top-right">
                    </td>
                </tr>
                <tr class="bottom">
                    <td id="bottom-left">
                    </td>
                    <td id="bottom-middle">

                    </td>
                    <td id="bottom-right">

                    </td>
                </tr>
            </table>

        </div>
        <div class="seat" id="seat1">
          <p class="playerseat">Player1</p>
        </div>
        <div class="seat" id="seat2">
          <p class="playerseat">Player2</p>
        </div>
        <div class="seat" id="seat3">
          <p class="playerseat">Player3</p>
        </div>
        <div class="seat" id="seat4">
          <p class="playerseat">Player4</p>
        </div>
        <div class="seat" id="seat5">
          <p class="playerseat">Player5</p>
        </div>
        <div class="gamecontent">
            <div class="singlemultiplayer">
                <button type="button" id="single">Single</button>
                <button type="button" id="multiplayer">Multiplayer</button>
            </div>

            <div id="gamebuttons">
                <label for="stake">Stake:</label><br />
                <input id="option1" type="button" name="stake" value="100" /> edds<br />
                <input id="option2" type="button" name="stake" value="50" /> edds<br />
                <input id="option3" type="button" name="stake" value="20" /> edds<br />
                <input id="stake" type="number" name="stake" placeholder="Stake" required /><br />
                <button type="button" id="check">Check</button>
                <button type="button" id="fold">Fold</button>
                <button type="button" id="bet">Bet</button>
                <button type="button" id="call">Call</button>
                <button type="button" id="start">Start</button>
            </div>
        </div>
    </div>
  )
}
});

module.exports= Game;
