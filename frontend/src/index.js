import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // all of our components are going to be in the App folder

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

