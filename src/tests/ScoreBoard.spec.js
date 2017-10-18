import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

// Import all the components
import App from '../components/App';

describe('testing the scoreboard', () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
    app.setState({
      gameStarted: true,
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
          {id: 1,score: 4},
          {id: 2,score: 10},
          {id: 3,score: 20},
        ],
        [
          {id: 1,score: 10},
          {id: 2,score: 10},
          {id: 3,score: 20},
        ],
      ]
    });
  })
  
  it("displays the game table", () => {
    const table = app.find('.scorekeeper table thead tr td');
    
    expect(table.length).toEqual(app.state().players.length);
  });
  
  it("finishes the game when clicked", () => {
    let button = app.find('.scorekeeper table tbody td.table-buttons button').at(1);
    button.simulate('click');
    
    expect(app.state().gameStarted).toEqual(false);
  });
  
  it("displays the number of score rows", () => {
    const rows = app.find('.scorekeeper table tbody tr');
    
    expect(rows.length).toEqual(app.state().scores.length+1);
  });
  
  it("adds a new form for new round", () => {
    let button = app.find('.scorekeeper table tbody td.table-buttons button').at(0);
    button.simulate('click');
    
    expect(app.find('.scorekeeper table tbody tr.add-score').length).toEqual(1);
  });
  
  it("adds new scores to scores object on submitting", () => {
    let initialLength = app.state().scores.length;
    app.setState({addingRound: true});
    let i = 5;
    app.find('tr.add-score input').forEach((input) => {
      input.simulate('change', {target: {value: i}});
    });
    app.find('.scorekeeper form').simulate('submit');
    
    expect(app.state().scores.length).toEqual(initialLength+1);
  });
  
  it("show correct number of total columns", () => {
    expect(app.find('tfoot tr td').length).toEqual(app.state().players.length);
  });
  
  it("calculates totals properly", () => {
    let score = 0;
    app.state().scores.map((s) => {
      score += s[0].score;
    });
    let totals = app.find('.scorekeeper tfoot tr td').at(0);
    
    expect(score).toEqual(Number(totals.text()));
  });
});
