// TODO: where should this function be?

/*
Logic for constructing new coupons.
*/

import uuid from 'node-uuid';


export default function newCoupon(code) {
    return {
        id: uuid.v4(),
        code
    };
};