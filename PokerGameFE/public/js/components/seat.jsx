var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');
var Store = require('../stores/store.js');

var Seat = React.createClass({
  componentDidMount : function() {

      Store.CurrentPlayer.on('update' , this.handleUpdate);

  },

  getInitialState: function() {
      var player = Store.CurrentPlayer.getPlayer();

      return {
          CurrentPlayer: player
      }
  },

  handleUpdate : function() {
      this.setState({
          CurrentPlayer: Store.CurrentPlayer.getPlayer()
      })
  },

    render: function() {
      var seat = "seat" + (this.state.CurrentPlayer + 1);
      var seats = [];
      var color= {
        background: 'green'
      };

      var colorred= {
        background: 'red'
      };

      for ( var i=1; i<6; i++){
        if(seat == ("seat" + i)){
            seats.push(
              <div className="seat" key={i} id={"seat" +i} style={color}>
            </div>);
        }
        else{
          seats.push(
          <div className="seat"  key={i} id={"seat" +i} style={colorred}>
          </div>);
        }
      }
        return (
          <div className="seats">
          {seats}
          </div>
        )
    }
});

module.exports = Seat;
