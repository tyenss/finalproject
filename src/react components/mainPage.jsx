import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage.jsx";
import SimpleMap from "./googleMap.jsx";

/*
creates react components to display a tinder match and allows you to accept or decline them
 */
class MainPage extends React.Component
{
    constructor()
    {
        super();
        this.props={
            airline:"airline",
            airplane:"airplane",
            destination:"destination",
            cost:"cost",
            logo:"logo",
            title:"Current location",
            destinationLat:1,
            destinationLng:1,
            lat:0,
            lng:0
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
            //goes to acceptPage.jsx
        } else
        {
            //Call api that creates another tinder date
        }
    }

    render() {
        return (
            <div id={"entirePage"}>
                 <div className="mainTinderPage">
                     <button ref={"reject"} onClick={this.handleClick(true)} className={"button"}>Bad Plane</button>
                     <div className={"attributes"}>
                         <p ref={"airline"}>{this.props.airline}</p>
                         <p ref={"airplane"}>{this.props.airplane}</p>
                         <p ref={"destination"}>{this.props.destination}</p>
                         <p ref={"cost"}>{this.props.cost}</p>
                         <p ref={"logo"}>{this.props.logo}</p>
                     </div>
                     {/*<div id="map"></div>*/}
                     <button ref={"accept"} onClick={this.handleClick(false)} className={"button"}>Good Plane</button>

                 </div>
                <SimpleMap />
             </div>

        )
    }
}

export default MainPage;