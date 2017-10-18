import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

// Import all the components
import App from '../components/App';
import AddGameButton from '../components/AddGameButton';

describe('testing the add game button', () => {
  it('loads the button on page start', () => {
    const addGameButton = shallow(<AddGameButton />);
    expect(addGameButton.contains("Add new Scoreboard")).toEqual(true);
  });
  // I know this is weird that I'm loading <App /> for <AddGameButton />
  // but I'm not sure how else to check.
  it('loads the new game form on being clicked', () => {
    const app = mount(<App />);
    const button = app.find('AddGameButton button').at(0);
    
    button.simulate('click');
    expect(app.state().showNewForm).toEqual(true);
  });
});
