/*
Presentational component that displays the entire application.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './defaultStyles.scss';
import NavLink from '../navLink/NavLink.jsx';


class AppLayout extends Component {
  render() {
    return (
        <div>
            <ul role="nav">
                <li styleName='navLink'><NavLink to="/coupons">Manage coupons</NavLink></li>
                <li styleName='navLink'><NavLink to="/shopping">Use coupons</NavLink></li>
                <li styleName='navLink'><NavLink to="/">Logout</NavLink></li>
            </ul>
            
            <p>
                This component is working as a layout. It generates some HTML, 
                but also includes the HTML generated by any child components that are passed  to it.
                Notice that when using the links above, the links and footer stay but the
                area in between changes. Thanks to react-router, it also works if you
                change the browser URL manually. Also notice that the active link
                gets highlighted.
            </p>

            {this.props.children}

            <p>This is a footer.</p>

        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(AppLayout, styles);
