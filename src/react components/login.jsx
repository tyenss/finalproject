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

        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeUser=this.handleChangeUser.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit()
    {
        //some function (this.state.value,this.state.password);
        // alert('A name was submitted: ' + this.state.value);
        // event.preventDefault();
        alert(document.getElementById("userText").value+document.getElementById("passText").value);
        login(document.getElementById("userText").value,document.getElementById("passText").value);
    }
    handleChangeUser(event) {
        this.setState({value: event.target.value});
    }

    handleChangePass(event) {
        this.setState({password: event.target.value});
    }

    render()
    {
        let className = 'menu';
        let buttonName="submitButton";
        let inputTextClass="input";
        // if (this.state.isActive) {
        //     className += ' menu-active';
        // }
        return (

            <div>
                <form className={className} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        {/*Username:*/}
                        <input type="text" name="username" value={this.state.value}
                               onChange={this.handleChangeUser}
                               className={inputTextClass}
                               id={"userText"}
                                placeholder="username"/>
                        {/*Password:*/}
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.handleChangePass}
                               className={inputTextClass}
                               id={"passText"}
                               placeholder="password"/>
                    </label>
                    <input type="submit" value="Submit" className={buttonName} />
                </form>
                {/*ReactDOM.render(<MapContainer lat={5} lng={5} destinationLat={6} destinationLng={6}/>);*/}
            </div>
    )}
}

export default Welcome;