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
    players: [
      {
        id: 1,
        name: "Ale",
      },
      {
        id: 2,
        name: "Indi",
      },
      {
        id: 3,
        name: "Sam",
      }
    ],
    scores: [
      [
        {
          id: 1,
          score: 4,
        },
        {
          id: 2,
          score: 10,
        },
        {
          id: 3,
          score: 20,
        }
      ],
      [
        {
          id: 1,
          score: 10,
        },
        {
          id: 2,
          score: 10,
        },
        {
          id: 3,
          score: 20,
        }
      ],
    ],
    roundOnHundred: false,
  };
  
  handleShowNewForm = () => {
    this.setState ({ gameStarted: false, showNewForm: true });
  }
  
  instantiatePlayers = (newPlayers) => {
    this.setState({ players: newPlayers });
  }
  
  changePlayerName = (playerId, name) => {
    this.setState({ players: this.state.players.map((player) => {
      if (playerId === player.id) {
        return {
          ...player,
          name: name,
        };
      }
      return player;
    }) });
  }
  
  updateRoundOnHundred = () => {
    this.setState({ roundOnHundred: !this.state.roundOnHundred });
  }
  
  createGame = (e) => {
    e.preventDefault();
    this.setState({
      showNewForm: false,
      gameStarted: true,
    })
  }
  
  finishGame = () => {
    this.setState({
      showNewForm: false,
      gameStarted: false,
      players: [],
      scores: [],
    })
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // handle sorting of scores and players...
    
  }
  
  render() {
    return (
      <div id="application">
        <Header />
        
        <div id="content" className="container">
          <ScoreBoard
            gameStarted={this.state.gameStarted}
            players={this.state.players}
            scores={this.state.scores}
            finishGame={this.finishGame} />
          
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
