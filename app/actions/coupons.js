/*
Actions that affect the coupons branch of the application state
*/

import newCoupon from '../store/couponConstructor';
import Swagger from 'swagger-client';
import config from '../config';
// var config = require("runtimeConfig");


// Simple action creators (with no side-effects) might look like this:

// export const UPDATE_COUPON = 'UPDATE_COUPON';
// export function updateCoupon(updatedCoupon) {
//     return {
//         type: UPDATE_COUPON,
//         ...updatedCoupon
//     };
// };

// export const DELETE_COUPON = 'DELETE_COUPON';
// export function deleteCoupon(id) {
//     return {
//         type: DELETE_COUPON,
//         id
//     };
// };

// export const LIST_COUPONS = 'LIST_COUPONS';
// export function listCoupons() {
//     return {
//         type: LIST_COUPONS
//     };
// };


// When actions can cause side-effects, things get more complicated.
// The following actions involve server-side API calls.
// The method used here uses redux-thunk and 2 or more subactions for each logical action.
// The main action is actually a function that dispatches the subactions and invokes the server.
// One subaction is dispatched before the call to the server to store the fact that the action has begun.
// The other subaction is dispatched when the server call completes successfully in order to update the
// application state. For correct error handling, other actions would be needed to update the state in
// case the server call doesn't complete correctly. 
// An alternative (and probably better) approach is to use FSA actions with promises. FSA actions contain
// success and error results directly.


// This is a creator for an asynchronous action (using redux-thunk)
export function createCoupon(coupon) {

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestNewCoupon())

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        // 
        // TODO: it seems like it should be possible to reuse the swagger client, but how?
        return new Swagger({
            url: config.backend.contract,
            usePromise: true})
        .then(client => {
            client.setHost(config.backend.host);
            client.setBasePath(config.backend.basePath);
            // client.clientAuthorizations.add("api_key", new Swagger.ApiKeyAuthorization('api_key', 'Test', 'header'));
            client.coupon.addCoupon({ body: coupon})
            .then(response => {
                console.log(response);
                // NOTE: it would be better if the API returned the newly created coupon
                dispatch(receiveCoupon(coupon))
            })
            .catch(error => {
                console.log('Failed to create coupon: ' + error.statusText)
                dispatch(newCouponFailure())
            });
        }).catch(error => {
            console.log('Failed to load swagger contract: ' + error.statusText)
            dispatch(newCouponFailure())
        });
    }
} 

export const REQUEST_NEW_COUPON = 'REQUEST_NEW_COUPON'
export function requestNewCoupon() {
  return {
    type: REQUEST_NEW_COUPON
  }
}

export const RECEIVE_NEW_COUPON = 'RECEIVE_NEW_COUPON';
export function receiveCoupon(coupon) {
    return {
        type: RECEIVE_NEW_COUPON,
        coupon: newCoupon(coupon)
    };
};

export const NEW_COUPON_FAILURE = 'NEW_COUPON_FAILURE';
export function newCouponFailure() {
    return {
        type: NEW_COUPON_FAILURE
    };
};





// This is a creator for an asynchronous action (using redux-thunk)
export function fetchCoupons() {

    // Note: we could check if we already have the coupons cached and skip the API
    // call completely.

    return function (dispatch) {

        dispatch(requestCoupons())

        return new Swagger({
            url: config.backend.contract,
            usePromise: true})
        .then(client => {
            client.setHost(config.backend.host);
            client.setBasePath(config.backend.basePath);
            // client.clientAuthorizations.add("api_key", new Swagger.ApiKeyAuthorization('api_key', 'Test', 'header'));
            client.coupon.getAllCoupons({})
            .then(response => {
                console.log(response);
                dispatch(receiveCoupons(response.obj))
            })
            .catch(error => {
                console.log('Failed to fetch coupons: ' + error.statusText)
                dispatch(fetchCouponsFailure())
            });
        }).catch(error => {
            console.log('Failed to load swagger contract: ' + error.statusText)
            dispatch(fetchCouponsFailure())
        });
    }
} 


export const REQUEST_COUPONS = 'REQUEST_COUPONS'
export function requestCoupons() {
  return {
    type: REQUEST_COUPONS
  }
}

export const RECEIVE_COUPONS = 'RECEIVE_COUPONS'
export function receiveCoupons(coupons) {
  return {
    type: RECEIVE_COUPONS,
    coupons: coupons,
    receivedAt: Date.now()
  }
}

export const FETCH_COUPONS_FAILURE = 'FETCH_COUPONS_FAILURE'
export function fetchCouponsFailure() {
  return {
    type: FETCH_COUPONS_FAILURE
  }
}