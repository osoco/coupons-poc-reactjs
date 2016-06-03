/*
Container component that shows a list of all coupons.
Acts as a buffer so the presentational components don't need to know about Redux.
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CouponForm from '../components/CouponForm.jsx'
import { createCoupon } from '../actions/coupons'
import {reduxForm} from 'redux-form';


// Create callbacks that subcomponents can use to dispatch actions indirectly
const mapDispatchToProps = (dispatch) => {
    return {
        // Since we are using reduxForm, this will be called by handleSubmit
        // and we receive validated data here
        onSubmit: (formData) => {
            const coupon = {
                code: formData.code,
                name: formData.name,
                description: formData.description,
                numMaxUsage: 2,
                expirationDate: '2016-07-10',//new Date().toISOString(),
                discount: 10
            }
            dispatch(createCoupon(coupon))
        }
    }
}

// We wrap this component in a reduxForm, which handles validation and syncing
// the form state to the store. See the docs for more configuration options.
export default reduxForm({
    form: 'create_coupon', // a unique name for this form
    fields: ['code', 'name', 'description'] // all the fields in the form
},
undefined, // The only state needed by CouponForm is handled by reduxForm
mapDispatchToProps
// undefined,
// {pure: false}
)(CouponForm);