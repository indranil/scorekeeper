import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

// Import all the components
import App from '../components/App';
import NewGameForm from '../components/NewGameForm';

describe('testing the new game form', () => {
  let app;
  beforeEach(() => {
    localStorage.clear();
    app = mount(<App />);
    app.setState({ showNewForm: true });
  })
  
  it('does not load the form on page start', () => {
    localStorage.clear();
    const mainApp = mount(<App />);
    const heading = <h4 className="column">New Game</h4>;
    expect(mainApp.contains(heading)).toEqual(false);
  });
  
  it('shows the form when showNewForm is true', () => {
    const newGameForm = shallow(<NewGameForm showNewForm={true} players={[]} />);
    expect(newGameForm.contains(<h4 className="column">New Game</h4>)).toEqual(true);
  });
  
  it('displays the correct number of players on start', () => {
    const numInput = app.find('NewGameForm .num-players input').at(0)
    
    expect(numInput.props().value).toEqual(app.state().players.length);
  });
  
  it('displays correct name fields on changing the number of players', () => {
    app.setState({
      players: [
        ...app.state().players,
        {
          name: "Test Name",
          id: 4
        }
      ],
    });
    const forms = app.find('NewGameForm .player-names div').at(0);
    
    expect(forms.find('input').length).toEqual(app.state().players.length);
  });
  
  it('changes number of players when number input is changed', () => {
    const numInput = app.find('NewGameForm .num-players input').at(0);
    
    numInput.simulate('change', { target: { value: 5 }});
    
    expect(app.state().players.length).toEqual(5);
  });
  
  it('allows you to change the special options', () => {
    const input = app.find('NewGameForm .spl-options input').at(0);
    input.simulate('change', {target: {checked: true}});
    
    expect(app.state().roundOnHundred).toEqual(true);
  });
  
  it('saves players and starts a new game', () => {
    app.setState({
      players: [
        ...app.state().players,
        {
          name: "Test Name",
          id: 4
        }
      ],
    });
    const form = app.find('NewGameForm form').at(0);
    form.simulate('submit');
    
    expect(app.find('table thead tr td').length).toEqual(app.state().players.length);
  });
});
