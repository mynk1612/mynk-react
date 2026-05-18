import React from 'react';  // core foundation library for building user interfaces
import ReactDOM from 'react-dom/client'; // implementation of the React DOM for web browsers
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);