import React from 'react';
import {create_accept_page} from "../javascript files/final_project"


/*
creates react components to display a tinder match and allows you to accept or decline them
 */
class PreferencesPage extends React.Component
{
    constructor()
    {
        super();
        this.state={first:"",
            last:"",
            age:"",
            gender:"",
            email:""
        };
        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
    }
    handleSubmit()
    {
        create_accept_page();
        //create_ticket_api();
        //functionThing(
        //create_new_flight_info(document.getElementById("firstText").value,document.getElementById("lastText").value,
        // document.getElementById("ageText").value,document.getElementById("genderText").value,
        // document.getElementById("emailText").value);
        //login(document.getElementById("userText").value,document.getElementById("passText").value);
    }
    handleChangeFirst(event) {
        this.setState({first: event.target.value});
    }

    handleChangeLast(event) {
        this.setState({last: event.target.value});
    }
    handleChangeAge(event) {
        this.setState({age: event.target.value});
    }

    handleChangeGender(event) {
    this.setState({gender: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    render() {
        let className = 'menu';
        let buttonName="submitButton";
        let inputTextClass="input";
        return (
            <div id={"entirePage"}>
                <div id={"preferenceTitle"}>
                    <h1 id={"linderTinder"}>Linder Tinder</h1>
                    <h6>Love at its Highest</h6>
                    <h1 id={"pref"}>Passenger Information</h1>
                    <br/>
                </div>
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
                               placeholder="gender"/>
                        <input type="text" name="email" value={this.state.email}
                               onChange={this.handleChangeEmail}
                               className={inputTextClass}
                               id={"emailText"}
                               placeholder="email"/>
                    </label>
                    <input type="button" value="Submit" className={buttonName} onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
        )
    }
}

export default PreferencesPage;