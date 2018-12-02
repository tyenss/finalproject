import React, { Component } from 'react';

/*
creates react login component
 */
class AcceptPage extends React.Component
{
    constructor(props)
    {
        super(props);
        this.props={name:"airline",
            departingTime:"airplane",
            arrivalTime:"destination",
            flightID:"cost",
            departingLocation:"airplane",
            arrivingLocation:"destination",
            date:"date"
        };
    }

    render()
    {
        return (
            <div>
                <p>Congratulations, you found your true love!</p>
                <p>Hears your ticket:</p>
                <div>{this.props.departingTime}</div>
            </div>
        )}
}

export default Welcome;