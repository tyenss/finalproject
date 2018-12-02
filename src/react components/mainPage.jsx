import React, { Component } from 'react';

/*
creates react components to display a tinder match
 */
class MainPage extends React.Component
{
    constructor()
    {
        super();
        this.props={airline:"airline",
            airplane:"airplane",
            destination:"destination",
            cost:"cost"
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

        } else
        {
            //Call api that creates another tinder date
        }
    }

    render() {
        return (
            <div>
                <button ref={"reject"} onClick={this.handleClick}>Bad Plane</button>
                <p ref={"airline"}>{this.props.airline}</p>
                <p ref={"airplane"}>{this.props.airplane}</p>
                <p ref={"destination"}>{this.props.destination}</p>
                <p ref={"cost"}>{this.props.cost}</p>
                {/*<div id="map"></div>*/}
                <button ref={"accept"} onClick={this.handleClick}>Good Plane</button>
            </div>
        )
    }
}

export default Welcome;