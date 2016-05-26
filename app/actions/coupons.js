/*
Actions that affect the coupons branch of the application state
*/

import newCoupon from '../store/couponConstructor';


export const CREATE_COUPON = 'CREATE_COUPON';

export function createCoupon(coupon) {
    return {
        type: CREATE_COUPON,
        coupon: newCoupon(...coupon)
    };
};


export const UPDATE_COUPON = 'UPDATE_COUPON';

export function updateCoupon(updatedCoupon) {
    return {
        type: UPDATE_COUPON,
        ...updatedCoupon
    };
};


export const DELETE_COUPON = 'DELETE_COUPON';

export function deleteCoupon(id) {
    return {
        type: DELETE_COUPON,
        id
    };
};