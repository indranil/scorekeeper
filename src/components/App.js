import React, { Component } from 'react';

import Header from './Header';
import AddGameButton from './AddGameButton';
import NewGameForm from './NewGameForm';
import ScoreBoard from './ScoreBoard';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    let ls = localStorage.getItem('scorekeeperState');
    if (ls !== null) {
      this.state = JSON.parse(ls);
    } else {
      this.state = {
        gameStarted: false,
        showNewForm: false,
        players: [],
        scores: [],
        addingRound: false,
        newScore: [],
        roundOnHundred: false,
      };
    }
  }
  
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
  
  handleAddingRound = (e) => {
    e.preventDefault();
    this.setState({ addingRound: true });
  }
  
  changeScore = (e, player_id) => {
    let newScore = this.state.newScore;
    let obj = {
      id: player_id,
      score: Number(e.target.value),
    };
    
    let index = -1;
    newScore.filter((s, pos) => {
      if( s.id === player_id ) {
        delete newScore[index = pos];
      }
      return true;
    });
    
    if( index === -1 ) {
      newScore.push(obj);
    } else {
      newScore[index] = obj;
    }
    
    this.setState({
      newScore: newScore
    });
  }
  
  addNewRound = (e) => {
    e.preventDefault();
    let scores = this.state.scores;
    
    scores.push(this.state.newScore.sort((s1, s2) => s1.id > s2.id ? 1 : -1));
    this.setState({
      scores: scores,
      newScore: [],
      addingRound: false,
    });
  }
  
  finishGame = (e) => {
    e.preventDefault();
    this.setState({
      showNewForm: false,
      gameStarted: false,
      players: [],
      scores: [],
    });
  }
  
  componentDidUpdate = (prevProps, prevState) => {
    // store files in localStorage for later use
    localStorage.setItem('scorekeeperState', JSON.stringify(this.state));
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
            addingRound={this.state.addingRound}
            roundOnHundred={this.state.roundOnHundred}
            finishGame={this.finishGame}
            handleAddingRound={this.handleAddingRound}
            changeScore={this.changeScore}
            addNewRound={this.addNewRound} />
          
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
