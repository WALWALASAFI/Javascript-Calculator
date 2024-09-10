/* eslint-disable no-unused-vars */
import React from 'react';
import { Provider } from 'react-redux';
import Calculator from './Calculator';
import store from './store'; // Ensure this path is correct

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Calculator />
    </div>
  </Provider>
);

export default App;
