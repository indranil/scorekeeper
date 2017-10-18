import React, { Component } from 'react';

import Header from './Header';
import AddGameButton from './AddGameButton';
import NewGameForm from './NewGameForm';
import ScoreBoard from './ScoreBoard';
import Footer from './Footer';

class App extends Component {
  state = {
    gameStarted: false,
    showNewForm: false,
    players: [],
  };
  
  render() {
    return (
      <div id="application">
        <Header />
        
        <div id="content" className="container">
          <ScoreBoard />
          
          <NewGameForm />

          <AddGameButton />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
