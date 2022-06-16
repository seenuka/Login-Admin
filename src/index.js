import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminContext from './Context/Context';
import {BrowserRouter as Router} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AdminContext>
    <App />
    </AdminContext>
    </Router>
  </React.StrictMode>
);
