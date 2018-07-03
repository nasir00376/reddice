import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userSignupRequest } from '../../Auth/Actions/SignUpActions';

import SignupForm from './SignupForm';

class SignUp extends Component {
    render() {

        const { userSignupRequest } = this.props;
        return (
            <div className="row justify-content-md-center">
                <div className="col col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <SignupForm userSignupRequest={userSignupRequest} />
                        </div>
                    </div>
                </div>
            </div>  
        ); 
    }
}

SignUp.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

/**
 * Where does this function takes userSignupRequest function as a prop?
 * It takes it from redux itself.
 * We will use connect (HOC) to provide this function to page level component.
 * connect function takes two parameters,
 * mapStateToProps => which provides some peace of date from redux store, it takes state and returns object.
 * mapDispatchToProps => Where we spcify action creators wrapped and dispatch
 */

export default connect((state) =>  { return {} }, { userSignupRequest })(SignUp);