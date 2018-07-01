import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Signup from '../components/Auth/Signup/Signup';

const routes = () => ( 
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/sign-up' component={ Signup }/>
    </Switch>
);

export default routes;