import React, { Component } from 'react';

class NewGameForm extends Component {
  render() {
    return (
      <form className="new-scoreboard">
        <div className="row">
          <label className="columns three">Players</label>
          <input type="number" placeholder="4" className="columns two" max="10" min="1" />
        </div>
        <div className="row">
          <label className="columns three">Names</label>
          <div className="columns six">
            <input type="text" placeholder="Indi" /><br />
            <input type="text" placeholder="Indi" /><br />
            <input type="text" placeholder="Indi" /><br />
            <input type="text" placeholder="Indi" />
          </div>
        </div>
        <div className="row">
          <label className="columns three">Options</label>
          <div className="columns nine">
            <label><input type="checkbox" /><span className="label-body">Round to 0 on reaching 100</span></label>
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
}

export default NewGameForm;
