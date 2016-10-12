var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Card= require('./card.jsx');
var Store= require('../stores/store.js');


var PlayerCards = React.createClass({

    render: function() {
    if(this.props.playerCards != null){
      var cards = this.props.playerCards.map(function(card, index){
      return (
        <Card key={index} suit={card.suit} cardValue={card.value}/>
      )

    });
  }

  return (
        <div className="playerCards">
          {cards}
        </div>
  )
}
});

module.exports= PlayerCards;
