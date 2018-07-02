import React from 'react';
import SignupForm from './SignupForm';

const signUp = () => {
    return (
        <div className="row justify-content-md-center">
            <div className="col col-md-4">
                <div className="card">
                    <div className="card-body">
                        <SignupForm />
                    </div>
                </div>
            </div>
        </div>
        
    ); 
}

export default signUp;