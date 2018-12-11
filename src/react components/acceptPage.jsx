import React from 'react';

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
            <div id={"entirePage"}>
                <div id={"title"}>
                    <h1 id={"linderTinder"}>Linder Tinder</h1>
                    <h6>Love at its Highest</h6>
                </div>
                <div id={"acceptPage"}>
                    <p>Thank you for using Linder Tinder</p>
                    <p>Here is your plane's info:</p>
                    <div id={"attributes"}>
                        <p>Ticket owner: {this.props.personName}</p>
                        <p>Age: {this.props.age}</p>
                        <p>Gender: {this.props.gender}</p>
                        <p>Plane Name: {this.props.name}</p>
                        <p>Departing Time: {this.props.departingTime}</p>
                        <p>Arrival Time: {this.props.arrivalTime}</p>
                        <p>Flight ID: {this.props.flightID}</p>
                        <p>Arrival Location: {this.props.arrivingLocation}</p>
                        <p>Date: {this.props.date}</p>
                    </div>
                </div>
            </div>
        )}
}

export default AcceptPage;