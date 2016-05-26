/*
Defines the reducer for the coupons branch of the app state.
*/

import {List, Map} from 'immutable';
import * as types from '../actions/coupons';
import newCoupon from '../store/couponConstructor';

// Define the initial state for when coupons branch hasn't yet been defined
const initialState = List([Map(newCoupon('AAAAA')), Map(newCoupon('BBBBB'))]);


export default function coupons(state = initialState, action) {
    let couponIndex;

    // Handle all actions that affect the coupons branch
    switch (action.type) {
        case types.CREATE_COUPON:
            return state.push(Map(action.coupon));

        case types.UPDATE_COUPON:
            couponIndex = state.findIndex(coupon => coupon.get('id') === action.id);

            if(couponIndex < 0) {
                return state;
            }

            const {type, ...updatedCoupon} = action;
            return state.mergeIn([couponIndex], updatedCoupon);

        case types.DELETE_COUPON:
            couponIndex = state.findIndex(coupon => coupon.get('id') === action.id);

            if(couponIndex < 0) {
                return state;
            }

            return state.delete(couponIndex);

        default:
            return state;
    }
}