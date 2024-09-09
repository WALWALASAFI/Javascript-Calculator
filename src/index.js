import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import Tailwind CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Add a trailing comma here if this is within an object/array (in this case, no comma needed)
);
