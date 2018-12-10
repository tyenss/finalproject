import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props);
        this.state=
        {
            lat:0,
            lng:0
        }
    }
    static defaultProps =
    {
        center: {
            lat: 60,
            lng: 30.33
        },
        zoom: 6
    };

    render()
    {
        let x=this.props.latitude;
        let y=this.props.longitude;
        return(
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '300px' }} id={"map"}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg"}}
                    defaultCenter={{
                        lat:x,
                        lng:y
                    }}
                    defaultZoom={this.props.zoom}
                >
                {/*<GoogleMapReact*/}
                    {/*bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg" }}*/}
                    {/*defaultCenter={{*/}
                        {/*lat: 59.95,*/}
                        {/*lng: 30.33*/}
                    {/*}}*/}
                    {/*defaultZoom={11}*/}
                    {/*id={"map"}*/}
                {/*>*/}
                    {/*<MyGreatPlace lat={59.955413} lng={30.337844} text={'Current Location'}/>*/}
                    {/*<AnyReactComponent*/}
                    {/*lat={this.props.destinationLat}*/}
                    {/*lng={this.props.destinationLng}*/}
                    {/*text={'Destination'}*/}
                    {/*/>*/}
                </GoogleMapReact>
            </div>
        );

    }
}

export default SimpleMap;
