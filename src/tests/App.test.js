import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

// Import all the components
import App from '../components/App';
import Header from '../components/Header';

describe('smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('enzyme installed', () => {
    shallow(<App />);
  });
  it('loads the app', () => {
    const app = mount(<App />);
    const heading = <h1>Scorekeeper</h1>;
    expect(app.contains(heading)).toEqual(true);
  });
});
