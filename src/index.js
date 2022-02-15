import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Link, NavLink, Switch
} from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/nav';
import './App.css';
import Shop from './component/Shop';
import Mac from './component/mac';


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
