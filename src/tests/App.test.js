import React from 'react';
import ReactDOM from 'react-dom';

// Import all the components
import App from '../components/App';

describe('smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
