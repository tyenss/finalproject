import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage";
import MapContainer from "./googleMap";
import {login} from "../javascript files/final_project";
/*
creates react login component
 */
class Welcome extends React.Component
{
    constructor(props) {
        super(props);
        this.state =
        {
            value: '',
            password:''
        };

        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit()
    {
        //some function (this.state.value,this.state.password);
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();

        login(this.state.value,this.state.password);
    }

    render()
    {
        let className = 'menu';
        let buttonName="submitButton";
        let inputTextClass="input";
        // if (this.props.isActive) {
        //     className += ' menu-active';
        // }
        return (

            <div>
                <form className={className} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        {/*Username:*/}
                        <input type="text" name="username" value={this.state.value}
                               onChange={(event,newValue) => this.setState({value:newValue})}
                               className={inputTextClass}
                                placeholder="username"/>
                        {/*Password:*/}
                        <input type="password" name="password" value={this.state.password}
                               onChange={(event,newValue) => this.setState({password:newValue})}
                               className={inputTextClass}
                               placeholder="password"/>
                    </label>
                    <input type="submit" value="Submit" className={buttonName} />
                </form>

            </div>
    )}
}

export default Welcome;