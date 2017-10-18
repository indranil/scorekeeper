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
    roundOnHundred: false,
  };
  
  handleShowNewForm = () => {
    this.setState ({ showNewForm: true });
  }
  
  instantiatePlayers = (newPlayers) => {
    this.setState({ players: newPlayers });
  }
  
  changePlayerName = (playerId, e) => {
    let players = this.state.players;
    players[playerId].name = e;
    this.setState({ players: players });
  }
  
  updateRoundOnHundred = () => {
    this.setState({ roundOnHundred: !this.state.roundOnHundred });
  }
  
  createGame = () => {
    this.setState({
      showNewForm: false,
      gameStarted: true,
    })
  }
  
  render() {
    return (
      <div id="application">
        <Header />
        
        <div id="content" className="container">
          <ScoreBoard
            gameStarted={this.state.gameStarted}
            players={this.state.players} />
          
          <NewGameForm
            showNewForm={this.state.showNewForm}
            players={this.state.players}
            instantiatePlayers={this.instantiatePlayers}
            changePlayerName={this.changePlayerName}
            roundOnHundred={this.state.roundOnHundred}
            updateRoundOnHundred={this.updateRoundOnHundred}
            createGame={this.createGame} />

          <AddGameButton
            gameStarted={this.state.gameStarted}
            showNewForm={this.state.showNewForm}
            handleShowNewForm={this.handleShowNewForm} />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
