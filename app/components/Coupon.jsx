/*
Presentational component that displays a single coupon.
This component has been written in React's functional style.
*/

import React, { PropTypes } from 'react'


// This is the function that will be called to display the component
const Coupon = ({ code }) => (
  <li>
    {code}
  </li>
)


// These are the props the component expects to receive
Coupon.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
}


export default Coupon