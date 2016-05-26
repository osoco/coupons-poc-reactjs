/*
This is the entry point into the coupon application.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App.jsx';
import configureStore from './store/configureStore';


// TODO pass initial state from local storage if available? Or from server if isomorphic?
const store = configureStore();

// Get the DOM element where the application will be inserted.
// Don't use <body> to avoid breaking other JS libraries that insert into the body.
const mountNode = document.getElementById('app');



// Render the application into the given location
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    mountNode
);