import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';


const appElement = (
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(appElement);
