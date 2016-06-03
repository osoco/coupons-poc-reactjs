/*
Presentational component that displays a context for managing coupons.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './defaultStyles.scss';

import FullCouponList from '../../containers/FullCouponList';
import CreateCouponForm  from '../../containers/CreateCouponForm.jsx';


class AdminContext extends Component {
  render() {
    return (
        <div>
            <h1>Manage coupons</h1>

            <h2>Create a new coupon</h2>
            <p>The coupon data is sent to the REST API, and added to the list below if successful.</p>
            <CreateCouponForm />

            <h2>Existing coupons</h2>
            <p>The list of coupons is pulled from the Ratpack application every time this component loads.</p>
            <FullCouponList />

        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(AdminContext, styles);