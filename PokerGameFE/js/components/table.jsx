var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var TableCards= require('./tableCards.jsx');
var Player= require('./player.jsx');

var Table = React.createClass({

  render: function() {

  return (
        <div className="table">
            <table>
                <tr className="top">
                    <td id="top-left">
                      <Player />
                    </td>
                    <td id="top-middle">
                      <TableCards />
                    </div>
                    </td>
                    <td id="top-right">
                      <Player />
                    </td>
                </tr>
                <tr className="bottom">
                    <td id="bottom-left">
                      <Player />
                    </td>
                    <td id="bottom-middle">
                        <Player />
                    </td>
                    <td id="bottom-right">
                      <Player />
                    </td>
                </tr>
            </table>

        </div>
  )
}
});

module.exports= Table;
