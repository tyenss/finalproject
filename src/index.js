import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Welcome from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from "./login";

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(<Welcome/>,document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
