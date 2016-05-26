/*
Creation logic for the Redux store.
*/

import {createStore} from 'redux';
import appReducer from '../reducers/app';


export default function configureStore(initialState) {
    const store = createStore(appReducer, initialState,
        // Enable devtools when using Chrome browser Redux Devtools extension
        window.devToolsExtension && window.devToolsExtension()
    );
    return store;
}


// If using other middleware:
  //   export default function configureStore(initialState) {
  //   const store = createStore(reducer, initialState, compose(
  //     applyMiddleware(...middleware),
  //     window.devToolsExtension ? window.devToolsExtension() : f => f
  //   ));
  //   return store;
  // }

// For isomorphic:
  // typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f