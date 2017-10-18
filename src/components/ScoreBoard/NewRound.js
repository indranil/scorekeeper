import React from 'react';

const NewRound = (props) => {
  if (props.addingRound) {
    return(
      <tr className="add-score">
        {props.players.map((player) =>
          <td key={player.id}>
            <input type="number" onChange={(e) => props.changeScore(e, player.id)} />
          </td>
        )}
      </tr>
    );
  }
  return null;
}

export default NewRound;
