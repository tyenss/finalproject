import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends React.Component
{
    render()
    {
        let x=parseFloat(this.props.latitude);
        let y=parseFloat(this.props.longitude);
        console.log(x+" "+y);
        return(
            // Important! Always set the container height explicitly
            <div style={{ height: '200px', width: '300px' }} id={"map"}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDieW8lTvVJ9TMnTEY5hUCZ5OHasZAnHmg"}}
                    defaultCenter={{
                        lat:35.9132,
                        lng:-79.0558
                    }}
                    center={{
                        lat:x,
                        lng:y
                }}
                    defaultZoom={6}
                >
                    <AnyReactComponent
                    lat={x}
                    lng={y}
                    text={'Your Destination'}
                    />
                </GoogleMapReact>
            </div>
        );

    }
}

export default SimpleMap;
