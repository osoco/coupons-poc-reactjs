/*
Presentational component that displays a context for managing coupons.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './admin.scss';
import FullCouponList from '../.././containers/FullCouponList';


class AdminContext extends Component {
  render() {
    return (
        <div>
            <h1>Admin</h1>
            <FullCouponList />
        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(AdminContext, styles);