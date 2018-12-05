import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

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

    render() {
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
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg'
})(MapContainer);