/*
Defines the root reducer for the application
*/

import { combineReducers } from 'redux'
import couponReducer from './coupons'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import {RECEIVE_NEW_COUPON} from '../actions/coupons';


const appReducer = combineReducers({
    couponApp: couponReducer,
    routing: routerReducer,
    form: formReducer.plugin({
        // Clear form data after it was sent successfully
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