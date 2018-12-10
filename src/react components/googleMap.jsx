import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            lat:0,
            lng:0
        }
    }
    static defaultProps =
    {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render()
    {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '300px' }} id={"map"}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg" }}
                    defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                    }}
                    defaultZoom={11} id={"map"}>
                    {/*<AnyReactComponent*/}
                    {/*lat={position.coords.latitude}*/}
                    {/*lng={position.coords.longitude}*/}
                    {/*text={'Current Location'}*/}
                    {/*/>*/}
                    {/*<AnyReactComponent*/}
                    {/*lat={this.props.destinationLat}*/}
                    {/*lng={this.props.destinationLng}*/}
                    {/*text={'Destination'}*/}
                    {/*/>*/}
                </GoogleMapReact>
            </div>
        );
        if (navigator.geolocation)
        {

// Get the user's current position
            navigator.geolocation.getCurrentPosition(function(position)
            {
                return (
                    // Important! Always set the container height explicitly
                    <div style={{ height: '200px', width: '300px' }} id={"map"}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg" }}
                            defaultCenter={{
                                lat: 59.95,
                                lng: 30.33
                            }}
                            defaultZoom={11}
                        >
                            {/*<AnyReactComponent*/}
                                {/*lat={position.coords.latitude}*/}
                                {/*lng={position.coords.longitude}*/}
                                {/*text={'Current Location'}*/}
                            {/*/>*/}
                            {/*<AnyReactComponent*/}
                                {/*lat={this.props.destinationLat}*/}
                                {/*lng={this.props.destinationLng}*/}
                                {/*text={'Destination'}*/}
                            {/*/>*/}
                        </GoogleMapReact>
                    </div>
                );

            }, function(error)
            {
                alert("Could not get current position")
            });
        } else
            {
            alert('Geolocation is not supported in your browser');
        }
        return <div></div>;

    }
}

export default SimpleMap;
