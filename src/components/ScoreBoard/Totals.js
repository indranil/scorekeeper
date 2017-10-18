import React from 'react';

const Totals = (props) => {
  let totals = {};
  props.players.forEach((player) => {
    totals[player.id] = 0;
  });
  props.scores.forEach((score) => {
    score.forEach((s) => {
      totals[s.id] += s.score;
      if (props.roundOnHundred && totals[s.id] === 100) {
        totals[s.id] = 0;
      }
    });
  });
  return(
    <tr>
      {props.players.map((player) =>
        <td key={player.id}>
          {totals[player.id]}
        </td>
      )}
    </tr>
  );
}

export default Totals;
