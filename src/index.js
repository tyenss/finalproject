import React from 'react';//needed
import ReactDOM from 'react-dom';// needed
import './index.css';
//import Welcome from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from "./react components/login.jsx";//needed
import {BackgroundVideo} from "./react components/backgroundVideo";
import MainPage from "./react components/mainPage.jsx";
import AcceptPage from "./react components/acceptPage";

document.addEventListener("DOMContentLoaded", function(event)
{
    ReactDOM.render(<MainPage airline={"airline"} airplane={"swer"} cost={"100"}
                             destination={"Place"} logo={"We Like to fly"} lat={0} lng={0}
                            destinationLng={1} destinationLat={1}/>,document.getElementById("root"));
    // ReactDOM.render(<Welcome/>,document.getElementById("root"));
    // ReactDOM.render(<AcceptPage name={"thing"} departingTime={"15:36"} arrivalTime={"16:38"}
    //                 flightID={53} departingLocation={"Chapel Hill"} arrivalLocation={"Texas"}
    //                 date={"15 September 2050"}/>,document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
