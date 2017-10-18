import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';

// Import all the components
import App from '../components/App';

describe('smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('installed enzyme', () => {
    shallow(<App />);
  });
  it('loads the app', () => {
    const app = mount(<App />);
    const heading = <h1>Scorekeeper</h1>;
    expect(app.contains(heading)).toEqual(true);
  });
});
