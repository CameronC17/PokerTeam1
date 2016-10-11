var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Card = React.createClass({

    render: function() {
        switch (this.props.suit) {
            case("spade"):
                var suit = "\u2660";
                break;
            case("diamond"):
                var suit = "\u2666";
                break;
            case("heart"):
                var suit = "\u2665";
                break;
            case("club"):
                var suit = "\u2663";
                break;
            default:
        }
        
        switch (suit) {
            case("\u2666"):
                var color = {
                    color: 'red'
                };
                break;
            case("\u2665"):
                var color = {
                    color: 'red'
                };
                break;
            case("\u2663"):
                var color = {
                    color: 'black'
                };
                break;
            case("\u2660"):
                var color = {
                    color: 'black'
                };
                break;
            default:

        }

        return (
            <div className="card">
                <p className="suit" style={color}>{suit}</p>
                <p className="cardtype" style={color}>{this.props.cardValue}</p>
                <p className="upsidedown suit" style={color}>{suit}</p>
            </div>
        )
    }
});

module.exports = Card;
