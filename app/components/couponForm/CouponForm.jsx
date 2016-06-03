/*
Presentational component that displays a form for creating or editing coupons.
This component has been written in React's functional style.
*/

import React, { PropTypes } from 'react'


// This is the function that will be called to display the component
const CouponForm = ({ fields, handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Code</label>
            <input type="text" {...fields.code} />
        </div>
        <div>
            <label>Name</label>
            <input type="text" {...fields.name} />
        </div>
        <div>
            <label>Description</label>
            <input type="text" {...fields.description} />
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
    </form>
)


// These are the props the component expects to receive
CouponForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
}


export default CouponForm
