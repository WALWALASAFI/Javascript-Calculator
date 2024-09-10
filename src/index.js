/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import React from 'react'; // This is necessary for JSX, so keep this import
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css'; // Import Tailwind CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // eslint-disable-line comma-dangle
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
