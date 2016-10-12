var NavBar = require('./components/navbar.jsx');
var Homepage = require('./components/homepage.jsx');
var Login = require('./components/login.jsx');
var Register = require('./components/register.jsx');
var Game = require('./components/game.jsx');
var Page= require('./components/page.jsx');


ReactDOM.render(
  <div>
    <NavBar />
    <Page />
  </div>,
  document.getElementById('container')
);
