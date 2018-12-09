import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage.jsx";

/*
creates react components to display a tinder match and allows you to accept or decline them
 */
class MainPage extends React.Component
{
    constructor()
    {
        super();
        this.props={airline:"airline",
            airplane:"airplane",
            destination:"destination",
            cost:"cost",
            logo:"logo"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {

    }

    render() {
        return (
            <div className="Preferences">
                <button ref={"reject"} onClick={this.handleClick(true)}>Bad Plane</button>
                <p ref={"airline"}>{this.props.airline}</p>
                <p ref={"airplane"}>{this.props.airplane}</p>
                <p ref={"destination"}>{this.props.destination}</p>
                <p ref={"cost"}>{this.props.cost}</p>
                <p ref={"logo"}>{this.props.logo}</p>
                {/*<div id="map"></div>*/}
                <button ref={"accept"} onClick={this.handleClick(false)}>Good Plane</button>
                {/*<MapContainer />*/}
            </div>
        )
    }
}

export default MainPage;