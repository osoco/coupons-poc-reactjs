/*
Defines the root reducer for the application
*/

import { combineReducers } from 'redux'
import couponReducer from './couponReducer'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import {RECEIVE_NEW_COUPON} from '../actions/coupons';


const appReducer = combineReducers({
    // we will store our app state under the key couponApp
    couponApp: couponReducer,
    // redux-router stores state here:
    routing: routerReducer,
    // redux-forms stores state here:
    form: formReducer.plugin({
        // Clear form data after it was sent successfully
        // TODO: the data gets cleared, but the view is not refreshed
        create_coupon: (state, action) => {
            switch(action.type) {
                case RECEIVE_NEW_COUPON:
                    return undefined;
                default:
                    return state;
            }
        }
    })
})


export default appReducer