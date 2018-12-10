import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage.jsx";
import SimpleMap from "./googleMap.jsx";
import {getRandomPicture} from "../javascript files/auxillaryFunctions";
import {create_new_flight_info} from "../javascript files/finalProject";

/*
creates react components to display a tinder match and allows you to accept or decline them
 */
class MainPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            airline:"airline",
            airplane:"airplane",
            destination:"destination",
            cost:"cost",
            logo:"logo",
            // onMarkerClick:"Place",
            // destinationTitle:"Location"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /*
        accept is a boolean where true means we go on our date
        False means that we create a new tinder date
    */
    handleClick(accept)
    {
        if (accept===true)
        {
            //ReactDOM.render(<AcceptPage/>,document.getElementById("root"));
            //function in API will call acceptPage.jsx
        } else
        {
            create_new_flight_info();
        }
    }

    render() {
        // let picture=getRandomPicture();
        // alert(picture);
        return (
            <div id={"entirePage"}>
                <div id={"title"}>
                    <h1 id={"linderTinder"}>Linder Tinder</h1>
                    <h6>Love at its Highest</h6>
                </div>
                 <div className="mainTinderPage">
                     <button ref={"reject"} onClick={this.handleClick(true)} className={"button"}>Bad Plane</button>
                     <div className={"attributes"}>
                         <img src={require("../pictures/plane.jpg")} alt={"Plane's face"}/>
                         <p ref={"airline"}>Airline: {this.props.airline}</p>
                         <p ref={"airplane"}>Airplane: {this.props.airplane}</p>
                         <p ref={"destination"}>Destination: {this.props.destination}</p>
                         <p ref={"cost"}>Cost: {this.props.cost}</p>
                         <p ref={"logo"}>Logo: {this.props.logo}</p>
                     </div>
                     {/*<div id="map"></div>*/}
                     <button ref={"accept"} onClick={this.handleClick(false)} className={"button"}>Good Plane</button>

                 </div>
                <SimpleMap
                //     destinationLat={5}
                // destinationLng={5}
                />
             </div>

        )
    }
}

export default MainPage;