/*
Presentational component that displays a list of coupons.
This component has been written in React's functional style.
*/

import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import styles from './couponList.scss';
import Coupon from './Coupon.jsx'


// This is the function that will be called to display the component
const CouponList = ({ coupons }) => (
  <ul styleName='coupon-list'>
    {coupons.map(coupon =>
      <Coupon
        key={coupon.id}
        {...coupon}
      />
    )}
  </ul>
)


// These are the props the component expects to receive
CouponList.propTypes = {
  coupons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  }).isRequired).isRequired
}


// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(CouponList, styles);
