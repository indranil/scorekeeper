import React, { Component } from 'react';

class NewGameForm extends Component {
  changeNumPlayers = (e) => {
    // console.log(e.target.value);
    if (e.target.value < 0) {
      e.target.value = 0;
    } else if (e.target.value > 10) {
      e.target.value = 10;
    }
    let num = e.target.value;
    let newPlayers = this.props.players;
    let numPlayers = newPlayers.length;
    
    // there's got to be a better way to do this.
    // but i'm too tired to think rn.
    if (num > numPlayers) {
      // add players
      for (let i = 0; i < (num - numPlayers); i++) {
        newPlayers.push({
          name: "",
          id: (numPlayers+i+1),
        });
      }
    } else if (num < numPlayers) {
      // remove players
      let numToRemove = (num - numPlayers);
      newPlayers.splice(numToRemove);
    }
    
    this.props.instantiatePlayers(newPlayers);
  }
  render() {
    if (this.props.showNewForm) {
      let numPlayers = this.props.players.length;
      return (
        <form onSubmit={this.props.createGame} className="new-scoreboard">
          <div className="row">
            <h4 className="column">New Game</h4>
          </div>
          <div className="row num-players">
            <label className="columns three">Players</label>
            <input type="number" className="columns two" max="10" min="1" value={numPlayers} onChange={this.changeNumPlayers} />
          </div>
          <div className="row player-names">
            <label className="columns three">Names</label>
            <div className="columns six">
              {this.props.players.map((player) =>
                <span key={player.id}>
                  <input type="text" value={player.name} onChange={(e) => this.props.changePlayerName(player.id, e.target.value) } /><br />
                </span>
              )}
            </div>
          </div>
          <div className="row spl-options">
            <label className="columns three">Options</label>
            <div className="columns nine">
              <label>
                <input type="checkbox" checked={this.props.roundOnHundred}
                                       onChange={this.props.updateRoundOnHundred} />
                <span className="label-body">Round to 0 on reaching 100</span>
              </label>
            </div>
          </div>
          <div className="submitter row">
            <div className="columns three">&nbsp;</div>
            <div className="columns six">
              <input type="submit" className="button-primary" value="Start!" />
            </div>
          </div>
        </form>
      );
    }
    return '';
  }
}

export default NewGameForm;
