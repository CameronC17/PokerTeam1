var Constants = require('../constants/constants.js');
var appDispatcher = require('../dispatchers/appDispatcher.js');

var Homepage = React.createClass({

  render: function() {

  return (
    <div className="home-content">
        <h1>PokerBalmz</h1>
        <p id="textContent">
            PokerBalmz is a Poker company named after its founder Ed Balm.
        </p><br />
        <p id="textContent">
            Balm so hard people want to fine me.
        </p>
        <div className="img">
            <img src="https://s14.postimg.org/vlaoa4edd/pokerimage.jpg" alt="Poker Image" id="homepageimage" />
        </div>
    </div>
  )
}
});

module.exports= Homepage;
