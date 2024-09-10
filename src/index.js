/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React from 'react'; // This is necessary for JSX, so keep this import
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // eslint-disable-line comma-dangle
);
