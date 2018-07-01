import React from 'react';
import { Link } from 'react-router-dom';

const navigationBar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light justify-content-between">
            <Link className="navbar-brand" to='/'>Red Dice</Link>

            <ul className="navbar-nav">  
                <li className="nav-item">
                    <Link to='/sign-up'>Sign Up</Link>
                </li>
            </ul>

        </nav>
    );
}

export default navigationBar;