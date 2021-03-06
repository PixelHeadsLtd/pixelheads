import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import 'react-mdl/extra/material.css'; NOT USED
import 'react-mdl/extra/material.js';
import './css/default.css';
import './css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import 'aos/dist/aos.css'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();
serviceWorker.register();

