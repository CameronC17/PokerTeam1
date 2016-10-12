var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Store= require('../stores/store.js');
var Chips= require('./chips.jsx');

var ChipList = React.createClass({
  componentDidMount : function() {

      Store.PChipStore.on('update' , this.handleUpdate);

  },

  getInitialState: function() {
      var chip = Store.PChipStore.getPChips();

      return {
          playerChips: chip
      }
  },

  handleUpdate : function() {
      this.setState({
          playerChips: Store.PChipStore.getPChips()
      })
  },

  render: function() {
    if(this.state.playerChips != null){
  var chips = this.state.playerChips.map(function(chip, index){
  return (
    <Chips key={index} value={chip}/>
  )
});
}

  return (
    <div className="chips">
    {Chips}
    </div>

  )
}
});

module.exports= ChipList;
