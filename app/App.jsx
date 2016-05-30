/*
Presentational component that displays the entire application.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import NavLink from './components/NavLink.jsx';


class App extends Component {
  render() {
    return (
        <div>
            <ul role="nav">
                <li><NavLink to="/admin">Admin</NavLink></li>
                <li><NavLink to="/shopping">Shop</NavLink></li>
            </ul>
            

            {this.props.children}

        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(App, styles);

// <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>