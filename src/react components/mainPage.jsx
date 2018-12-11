import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage.jsx";
import SimpleMap from "./googleMap.jsx";
import {getRandomPicture} from "../javascript files/auxillaryFunctions";
import {create_new_flight_info,create_accept_page} from "../javascript files/final_project";

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
            create_accept_page();
        } else
        {
            create_new_flight_info();
        }
    }

    render() {
        return (
            <div id={"entirePage"}>
                <div id={"title"}>
                    <h1 id={"linderTinder"}>Linder Tinder</h1>
                    <h6>Love at its Highest</h6>
                </div>
                 <div className="mainTinderPage">
                     <button ref={"reject"} onClick={this.handleClick.bind(this,false)} className={"button"}>Bad Plane</button>
                     <div className={"attributes"}>
                         <img src={require("../pictures/plane.jpg")} alt={"Plane's face"} id={"img"}/>
                         <p ref={"airline"} id={"airline"}>Airline: {this.props.airline}</p>
                         <p ref={"airplane"} id={"airplane"}>Airplane: {this.props.airplane}</p>
                         <p ref={"destination"} id={"destination"}>Destination: {this.props.destination}</p>
                         <p ref={"cost"} id={"cost"}>Cost: ${this.props.cost}</p>
                         <p ref={"logo"} id={"logo"}>Motto: {this.props.logo}</p>
                     </div>
                     {/*<div id="map"></div>*/}
                     <button ref={"accept"} onClick={this.handleClick.bind(this,true)} className={"button"}>Good Plane</button>

                 </div>
                <SimpleMap latitude={this.props.lat} longitude={this.props.lng}
                //     destinationLat={5}
                // destinationLng={5}
                />
             </div>

        )
    }
}

export default MainPage;