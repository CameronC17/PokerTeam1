var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Chips= require('./chips.jsx');
var PlayerCards= require('./playerCards.jsx');
var Store = require('../stores/store.js');

var Player = React.createClass({

  componentDidMount : function() {

      Store.PCardStore.on('update' , this.handleUpdate);

  },

  getInitialState: function() {
      var card = Store.PCardStore.getPCards(this.props.index);
      var chips = Store.PChipStore.getPChips(this.props.index);

      return {
          playerCards: card,
          playerChips: chips
      }
  },

  handleUpdate : function() {
      this.setState({
          playerCards: Store.PCardStore.getPCards(this.props.index),
          playerChips: Store.PCardStore.getPChips(this.props.index)
      })
  },

  render: function() {

  return (
        <div className="player">
          <PlayerCards playerCards={this.state.playerCards} />
          <Chips value={this.state.playerChips} />
        </div>
  )
}
});

module.exports= Player;
