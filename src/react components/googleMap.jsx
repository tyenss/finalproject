import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, PolyLine } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

/*
    Creates Google Map with 2 markers, one where the person is currently at and one where the destination is at
    Then, a simple route is created between the two locations
 */
/*
export class MapContainer extends Component
{
    constructor(props)
    {
        super(props);
        // this.state=
        // {
        //
        // }
    }

    render()
    {
        const pathCoordinates = [
            { lat: this.state.lat, lng: this.state.lng },
            { lat: this.state.destinationLat, lng:this.state.destinationLng }
        ];
        return (
            <div>
                <Map
                google={this.props.google}
                zoom={5}
                style={mapStyles}
                initialCenter={{
                lat: this.state.lat,
                lng: this.state.lng}}
                />
                <Marker
                    onClick = { this.onMarkerClick }
                    title = { this.state.title }
                    position = {{ lat: this.state.lat, lng: this.state.lng }}
                    name = { this.state.title }
                />
                <Marker
                    onClick = { this.onMarkerClick }
                    title = { this.state.destinationTitle }
                    position = {{ lat: this.state.destinationLat, lng: this.state.destinationLng }}
                    name = { this.state.destinationTitle }
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
                                icon: lineSymbol,
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
    apiKey: 'AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg'})(MapContainer);*/