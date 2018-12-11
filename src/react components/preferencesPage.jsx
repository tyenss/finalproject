import React, { Component } from 'react';
import ReactDOM from "react-dom";
import AcceptPage from "./acceptPage.jsx";
import {create_new_flight_info, login} from "../javascript files/final_project";

/*
creates react components to display a tinder match and allows you to accept or decline them
 */
class PreferencesPage extends React.Component
{
    constructor()
    {
        super();
        this.props={first:"",
            last:"",
            age:"",
            gender:"",
            email:""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleSubmit()
    {
        //functionThing(
        //create_new_flight_info(document.getElementById("firstText").value,document.getElementById("lastText").value,
        // document.getElementById("ageText").value,document.getElementById("genderText").value,
        // document.getElementById("emailText").value);
        //login(document.getElementById("userText").value,document.getElementById("passText").value);
    }
    handleChangeFirst(event) {
        this.setState({value: event.target.value});
    }

    handleChangeLast(event) {
        this.setState({password: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({value: event.target.value});
    }

    handleChangeGender(event) {
    this.setState({password: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({password: event.target.value});
    }

    render() {
        let className = 'menu';
        let buttonName="submitButton";
        let inputTextClass="input";
        return (
            <div className="Preferences">
                <form className={className} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        {/*Username:*/}
                        <input type="text" name="firstname" value={this.state.first}
                               onChange={this.handleChangeFirst}
                               className={inputTextClass}
                               id={"firstText"}
                               placeholder="first name"/>
                        <input type="text" name="lastname" value={this.state.last}
                               onChange={this.handleChangeLast}
                               className={inputTextClass}
                               id={"lastText"}
                               placeholder="last name"/>
                        <input type="text" name="age" value={this.state.age}
                               onChange={this.handleChangeAge}
                               className={inputTextClass}
                               id={"ageText"}
                               placeholder="age"/>
                        <input type="text" name="gender" value={this.state.gender}
                               onChange={this.handleChangeGender}
                               className={inputTextClass}
                               id={"genderText"}
                               placeholder="last name"/>
                        <input type="text" name="email" value={this.state.email}
                               onChange={this.handleChangeEmail}
                               className={inputTextClass}
                               id={"emailText"}
                               placeholder="last name"/>
                    </label>
                    <input type="button" value="Submit" className={buttonName} onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default PreferencesPage;