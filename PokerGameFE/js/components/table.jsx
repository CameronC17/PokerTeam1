var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var TableCards= require('./tableCards.jsx');

var Player= require('./player.jsx');

var Table = React.createClass({

  render: function() {

  return (
        <div className="table">
            <table>
              <tbody>
                <tr className="top">
                    <td id="top-left">
                      <Player index={0}/>
                    </td>
                    <td id="top-middle">
                      <TableCards />
                    </td>
                    <td id="top-right">
                      <Player index={4} />
                    </td>
                </tr>
                <tr className="bottom">
                    <td id="bottom-left">
                      <Player index={1} />
                    </td>
                    <td id="bottom-middle">
                        <Player index={2}/>
                    </td>
                    <td id="bottom-right">
                      <Player index={3}/>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
  )
}
});

module.exports= Table;
