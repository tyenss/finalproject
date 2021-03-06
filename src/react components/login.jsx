import React from 'react';
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
        return (

            <div>
                <div id={"title"}>
                    <h1 id={"linderTinder"}>Linder Tinder</h1>
                    <h6>Love at its Highest</h6>
                </div>
                <form className={className} onSubmit={this.handleSubmit.bind(this)}>
                    <label>
                        {/*Username:*/}
                        <input type="text" name="username" value={this.state.value}
                               onChange={this.handleChangeUser}
                               className={inputTextClass}
                               id={"userText"}
                                placeholder="username"/>
                        <input type="password" name="password" value={this.state.password}
                               onChange={this.handleChangePass}
                               className={inputTextClass}
                               id={"passText"}
                               placeholder="password"/>
                    </label>
                    <input type="button" value="Submit" className={buttonName} onClick={this.handleSubmit.bind(this)}/>
                </form>
            </div>
    )}
}

export default Welcome;