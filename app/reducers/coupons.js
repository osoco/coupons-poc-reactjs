/*
Defines the reducer for the coupons branch of the app state.
*/

import {List, Map} from 'immutable';
import * as types from '../actions/coupons';
import newCoupon from '../store/couponConstructor';



// Define the initial state for when coupons branch hasn't yet been defined
// We are using Immutable.js data structures here.
const initialState = Map({
    status: Map({
        requestingNewCoupon: false,
        fetchingCoupons: false
    }),
    coupons: List()
});


// Handle all actions that affect the coupons branch.
// The result of this function will replace the previous state.
export default function couponReducer(state = initialState, action) {
    let couponIndex;

    switch (action.type) {

        case types.REQUEST_NEW_COUPON:
            return state.setIn(["status", "requestingNewCoupon"], true);

        case types.RECEIVE_NEW_COUPON:
            return state
                .setIn(["status", "requestingNewCoupon"], false)
                .update("coupons", coupons => coupons.push(action.coupon));

        case types.NEW_COUPON_FAILURE:
            return state.setIn(["status", "requestingNewCoupon"], false);

        case types.REQUEST_COUPONS:
            return state.setIn(["status", "fetchingCoupons"], true);

        case types.RECEIVE_COUPONS:
            return state.set("coupons", List(action.coupons.map(newCoupon)));
            return state.setIn(["status", "fetchingCoupons"], false);

        case types.FETCH_COUPONS_FAILURE:
            return state.setIn(["status", "fetchingCoupons"], false);

        default:
            // It is important to return the previous state if no changes have been made!
            return state;
    }
}