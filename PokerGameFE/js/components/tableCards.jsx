var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Card= require('./card.jsx');

var TableCards = React.createClass({

    render: function() {

        return (
            <div className="tableCards">
                <div className="deck">
                    <div className="deck-card"></div>
                </div>
                <Card />
            </div>
        )
    }
});

module.exports = TableCards;
