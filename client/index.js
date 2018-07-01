import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

const render = Component => 
    ReactDOM.render(
        <AppContainer>
            <Router>
                <Component />
            </Router>
        </AppContainer>,
        document.getElementById('app')
    );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));