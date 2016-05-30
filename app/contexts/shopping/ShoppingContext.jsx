/*
Presentational component that displays a context for shopping with coupons.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './shopping.scss';


class ShoppingContext extends Component {
  render() {
    return (
        <div>
            <h1>Shopping...</h1>
        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(ShoppingContext, styles);