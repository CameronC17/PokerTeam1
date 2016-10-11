var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Card = React.createClass({

  render: function() {
    switch (this.props.suit) {
      case ("\u2666"):
      var color= {color: 'red'};
        break;
      case ("\u2665"):
      var color= {color: 'red'};
      break;
      case ("\u2663"):
      var color= {color: 'black'};
      break;
      case ("\u2660"):
      var color= {color: 'black'};
      break;
      default:

    }

  return (
        <div className="card">
          <p className= "suit" style={color}>{this.props.suit}</p>
          <p className="cardtype" style={color}>{this.props.cardValue}</p>
          <p className="upsidedown suit" style={color}>{this.props.suit}</p>

        </div>
  )
}
});

module.exports= Card;
