import React, { Component } from 'react';

export class BackgroundVideo extends Component
{
    constructor (props)
    {
        super(props);

        this.state = {
            videoURL: 'https://ytcropper.com/cropped/0B5c07ef0de1d7d'
        }
    }

    render()
    {
        return (
            <div id="background">
                <video id="backgroundVideo" loop autoPlay>
                    <source src={this.state.videoURL} type="video/mp4" />
                    <source src={this.state.videoURL} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default BackgroundVideo;