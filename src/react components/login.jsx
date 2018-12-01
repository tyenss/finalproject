import React, { Component } from 'react';

/*
creates react login component
 */
class Welcome extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Username:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        Password:
                        <input type="password" name="name" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
    )}
}

export default Welcome;