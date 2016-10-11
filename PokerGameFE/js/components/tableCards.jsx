var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Card= require('./card.jsx');
var Store= require('../stores/store.js');

var TableCards = React.createClass({
  componentDidMount : function() {

      Store.TCardStore.on('update' , this.handleUpdate);

  },

  getInitialState: function() {
      var card = Store.TCardStore.getTCards();

      return {
          tableCards: card
      }
  },

  handleUpdate : function() {
      this.setState({
          tableCards: Store.TCardStore.getTCards()
      })
  },

    render: function() {
      var cards = this.state.tableCards.map(function(card, index){
      return (
        <Card key={index} suit={card.suit} cardValue={card.cardValue}/>
      )
    });

        return (
            <div className="tableCards">
              {cards}
            </div>
        )
    }
});

module.exports = TableCards;
