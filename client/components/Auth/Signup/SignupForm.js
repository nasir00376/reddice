import React, { Component } from 'react';
import PropTypes from 'prop-types'
import timezones from '../../../data/timezone';
import classnames from 'classnames';

class SignupForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        timezone: '',
        errors: {},
        isLoading: false

    }

    onChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });

        this.props.userSignupRequest({ user: this.state }).then(
            () => {
            //   this.props.addFlashMessage({
            //     type: 'success',
            //     text: 'You signed up successfully. Welcome!'
            //   });
            //   this.context.router.push('/');
            },
            (err) => this.setState({ errors: err.response.data, isLoading: false })
          );
    }

    render() {
        const { errors } = this.state;
        const options = Object.keys(timezones).map(key => 
            <option key={key} value={timezones[key]}>{key}</option>);

        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1>Join our community!</h1>
                <div className={classnames("form-group", { 'has-error': errors.username })}>
                    <label className="control-label">Username</label>
                    <input
                        value={this.state.username}
                        type="text"
                        name="username"
                        className="form-control"
                        onChange={this.onChangeHandler.bind(this)}
                    />
                    {errors.username && <span className="help-block">{errors.username}</span>}
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

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;