import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import './index.css';
//import Welcome from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from "./react components/login.jsx";//needed
import {BackgroundVideo} from "./react components/backgroundVideo";
import MainPage from "./react components/mainPage.jsx";

document.addEventListener("DOMContentLoaded", function(event)
{
    //ReactDOM.render(<MainPage airline={"airline"} airplane={"swer"} cost={"100"}
      //                        destination={"Place"} logo={"We Like to fly"}/>,document.getElementById("root"));
    ReactDOM.render(<Welcome/>,document.getElementById("root"));
    //ReactDOM.render(<BackgroundVideo/>,document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
