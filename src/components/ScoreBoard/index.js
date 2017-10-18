import React, { Component } from 'react';

class ScoreBoard extends Component {
  render() {
    if (this.props.gameStarted) {
      let numPlayers = this.props.players.length;
      return (
        <div className="scorekeeper row">
          <div className="columns eight">
            <table className="u-full-width">
              <thead>
                <tr>
                  {this.props.players.map((player) =>
                    <td key={player.id}>{player.name}</td>
                  )}
                </tr>
              </thead>
              <tbody>
                {this.props.scores.map((score, index) =>
                  <tr key={index}>
                    {score.map(s =>
                      <td key={s.id}>{s.score}</td>
                    )}
                  </tr>
                )}
                <tr>
                  <td className="table-buttons" colSpan={numPlayers}>
                    <button className="button">New Round</button>
                    <button className="button" onClick={this.props.finishGame}>Finish Game</button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>30</td>
                  <td>29</td>
                  <td>48</td>
                  <td>45</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      );
    }
    return '';
  }
}

export default ScoreBoard;
