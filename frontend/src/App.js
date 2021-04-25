import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SaneemaHomeScreen from './Screens/SaneemaHomeScreen';
import SaneemaEpisodeScreen from './Screens/SaneemaEpisodeScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
          <div className="left">
              <a href="/"><img className="logo" src="./images/saneemaLogo.png" alt="सनीमा" /></a>
          </div>
          <div className="right">
              <a href="/about"><h2 className="about">this is us.</h2></a>
              <a href="/patreons"><h2 className="patrion">sugar daddies.</h2></a>
              <a href="/user"><img src="/images/user.png" alt="LogIn/SignUp" /></a>
          </div>
      </header>
      <main>
        <Route path="/" exact component={SaneemaHomeScreen}></Route>
        <Route path="/episode/:id" component={SaneemaEpisodeScreen}></Route>
      </main>
      <footer>
          <a href="suggestions"><h2>be a part.</h2></a>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
