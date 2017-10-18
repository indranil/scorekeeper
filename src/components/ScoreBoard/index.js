import React from 'react';

import NewRound from './NewRound';
import Totals from './Totals';

const ScoreBoard = (props) => {
  if (props.gameStarted) {
    let numPlayers = props.players.length;
    return (
      <div className="scorekeeper row">
        <div className="columns eight">
          <form onSubmit={props.addNewRound}>
            <table className="u-full-width">
              <thead>
                <tr>
                  {props.players.map((player) =>
                    <td key={player.id}>{player.name}</td>
                  )}
                </tr>
              </thead>
              <tbody>
                {props.scores.map((score, index) =>
                  <tr key={index}>
                    {score.map(s =>
                      <td key={s.id}>{s.score}</td>
                    )}
                  </tr>
                )}
                <NewRound
                  changeScore={props.changeScore}
                  addingRound={props.addingRound}
                  players={props.players} />
                <tr>
                  {props.addingRound ?
                    <td className="table-buttons" colSpan={numPlayers}>
                      <button type="submit" className="button-primary">Save</button>
                    </td>
                  :
                    <td className="table-buttons" colSpan={numPlayers}>
                      <button className="button" onClick={props.handleAddingRound}>New Round</button>
                      <button className="button" onClick={props.finishGame}>Finish Game</button>
                    </td>
                  }
                </tr>
              </tbody>
              <tfoot>
                <Totals players={props.players} scores={props.scores} roundOnHundred={props.roundOnHundred} />
              </tfoot>
            </table>
          </form>
        </div>
      </div>
    );
  }
  return null;
}

export default ScoreBoard;
