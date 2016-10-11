var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Card= require('./card.jsx');

var PlayerCards = React.createClass({

  render: function() {

  return (
        <div className="playerCards">
          <Card />

        </div>
  )
}
});

module.exports= PlayerCards;
