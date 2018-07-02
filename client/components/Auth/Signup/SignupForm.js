import React, { Component } from 'react';
import timezones from '../../../data/timezone';

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        timezone: ''

    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const options = Object.keys(timezones)
                            .map(key => <option key={key} value={timezones[key]}>{key}</option>)
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        value={this.state.email}
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        value={this.state.password}
                        type="password"
                        name="password"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input
                        value={this.state.passwordConfirmation}
                        type="password"
                        name="passwordConfirmation"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}
                    />
                </div>
                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select
                        value={this.state.timezone} 
                        name="timezone"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}>
                        <option value="" disabled>Choose Your Timezone</option>
                        { options }
                    </select>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        )     
    }
}

export default SignupForm;