import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

/*
    Creates Google Map with 2 markers, one where the person is currently at and one where the destination is at
    Then, a simple route is created between the two locations
 */


/*
    Info required
        Latitude Longitude of here
        Latitude Longitude of destination
        Destination Name (this.state.destinationTitle)
 */
export class MapContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.props=
        {
            title:"Current location"
        };
    }

    render()
    {
        const pathCoordinates = [
            { lat: this.props.lat, lng: this.state.lng },
            { lat: this.props.destinationLat, lng:this.props.destinationLng }
        ];
        return (
            <div>
                <Map
                google={this.props.google}
                zoom={5}
                style={mapStyles}
                initialCenter={{
                lat: this.props.lat,
                lng: this.props.lng}}
                />
                <Marker
                    onClick = { this.props.onMarkerClick }
                    title = { this.props.title }
                    position = {{ lat: this.props.lat, lng: this.props.lng }}
                    name = { this.props.title }
                />
                <Marker
                    onClick = { this.props.onMarkerClick }
                    title = { this.props.destinationTitle }
                    position = {{ lat: this.props.destinationLat, lng: this.props.destinationLng }}
                    name = { this.props.destinationTitle }
                />
                <Polyline
                    path={pathCoordinates}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                            {
                                // icon: lineSymbol,
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg'})(MapContainer);