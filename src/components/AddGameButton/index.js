import React from 'react';

const AddGameButton = props => {
  if (!props.gameStarted && !props.showNewForm) {
    return (
      <div className="add-scoreboard row">
        <div className="columns">
          <button className="button-primary" onClick={props.handleShowNewForm}>
            Add new Scoreboard
          </button>
        </div>
      </div>
    );
  }
  return '';
}

export default AddGameButton;
