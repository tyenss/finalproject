// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, Marker,Polyline } from 'google-maps-react';
//
// const mapStyles = {
//     width: '50%',
//     height: '100%'
// };
//
// /*
//     Creates Google Map with 2 markers, one where the person is currently at and one where the destination is at
//     Then, a simple route is created between the two locations
//  */
//
//
// /*
//     Info required
//         Latitude Longitude of here
//         Latitude Longitude of destination
//         Destination Name (this.state.destinationTitle)
//  */
// export class MapContainer extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state=
//         {
//             title:"Current location",
//             destinationLat:1,
//             destinationLng:1,
//             lat:0,
//             lng:0,
//             onMarkerClick:"Place",
//             destinationTitle:"Location"
//         };
//     }
//
//     render()
//     {
//         // const pathCoordinates = [
//         //     { lat: this.state.lat, lng: this.state.lng },
//         //     { lat: this.state.destinationLat, lng:this.state.destinationLng }
//         // ];
//         return (
//             <div>
//                 <Map
//                 google={this.state.google}
//                 zoom={5}
//                 style={mapStyles}
//                 initialCenter={{
//                 lat: 0,
//                 lng: 0}}
//                 />
//                 {/*<Marker*/}
//                     {/*onClick = { this.state.onMarkerClick }*/}
//                     {/*title = { this.state.title }*/}
//                     {/*position = {{ lat: this.state.lat, lng: this.state.lng }}*/}
//                     {/*name = { this.state.title }*/}
//                 {/*/>*/}
//                 {/*<Marker*/}
//                     {/*onClick = { this.state.onMarkerClick }*/}
//                     {/*title = { this.state.destinationTitle }*/}
//                     {/*position = {{ lat: this.state.destinationLat, lng: this.state.destinationLng }}*/}
//                     {/*name = { this.state.destinationTitle }*/}
//                 {/*/>*/}
//                 {/*<Polyline*/}
//                     {/*path={pathCoordinates}*/}
//                     {/*geodesic={true}*/}
//                     {/*options={{*/}
//                         {/*strokeColor: "#ff2527",*/}
//                         {/*strokeOpacity: 0.75,*/}
//                         {/*strokeWeight: 2,*/}
//                         {/*icons: [*/}
//                             {/*{*/}
//                                 {/*// icon: lineSymbol,*/}
//                                 {/*offset: "0",*/}
//                                 {/*repeat: "20px"*/}
//                             {/*}*/}
//                         {/*]*/}
//                     {/*}}*/}
//                 {/*/>*/}
//             </div>
//         );
//     }
// }
//
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg'})(MapContainer);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component
{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;
