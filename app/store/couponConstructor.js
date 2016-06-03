// TODO: where should this function be?

/*
Logic for constructing new coupons.
*/

import uuid from 'node-uuid';


export default function newCoupon(fields) {
    return {
        id: uuid.v4(),
        ...fields
    };
};