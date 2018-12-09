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
            <div id={"acceptPage"}>
                <h1>Thank you for using Linder Tinder</h1>
                <p>Here is your ticket:</p>
                <div>
                    <p>{this.props.name}</p>
                    <p>{this.props.departingTime}</p>
                    <p>{this.props.arrivalTime}</p>
                    <p>{this.props.flightID}</p>
                    <p>{this.props.departingLocation}</p>
                    <p>{this.props.arrivingLocation}</p>
                    <p>{this.props.date}</p>

                </div>
            </div>
        )}
}

export default AcceptPage;