/*
Creation logic for the Redux store.
*/

import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from '../reducers/appReducer';
import thunkMiddleware from 'redux-thunk'



export default function configureStore(initialState) {
    const store = createStore(appReducer, initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            // Enable devtools when using Chrome browser Redux Devtools extension
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}

// For isomorphic?:
  // typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f