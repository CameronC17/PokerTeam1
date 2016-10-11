var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Card= require('./card.jsx');
var Store= require('../stores/store.js');


var PlayerCards = React.createClass({

  componentDidMount : function() {

      Store.PCardStore.on('update' , this.handleUpdate);

  },

  getInitialState: function() {
      var card = Store.PCardStore.getPCards(this.props.index);

      return {
          playerCards: card
      }
  },

  handleUpdate : function() {
      this.setState({
          playerCards: Store.PCardStore.getPCards(this.props.index)
      })
  },

    render: function() {
    if(this.state.playerCards != null){
      var cards = this.state.playerCards.map(function(card, index){
      return (
        <Card key={index} suit={card.suit} cardValue={card.cardValue}/>
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
