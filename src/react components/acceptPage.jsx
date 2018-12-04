import React, { Component } from 'react';

/*
creates react login component
 */
class AcceptPage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <p>Congratulations, you found your true love!</p>
                <p>Hears your ticket:</p>
                <div>
                    <span>{this.props.name}</span>
                    <span>{this.props.departingTime}</span>
                    <span>{this.props.arrivalTime}</span>
                    <span>{this.props.flightID}</span>
                    <span>{this.props.departingLocation}</span>
                    <span>{this.props.arrivingLocation}</span>
                    <span>{this.props.date}</span>

                </div>
            </div>
        )}
}

export default Welcome;