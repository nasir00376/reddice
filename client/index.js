import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'; 

import App from './components/App';

/**
 * @param rootReducer
 * @param initialSate
 * @param applyMiddleware
 * takes state and return state
 * 
 */

const store = createStore(
    (state = {}) => state,
    applyMiddleware(thunk)
);

const redDice = Component => (

    <AppContainer>
        <Provider store={store}>
            <Router>
                <Component />
            </Router>
        </Provider>
    </AppContainer>
);

const render = Component => 
    ReactDOM.render(
        redDice(Component),
        document.getElementById('app')
    );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));