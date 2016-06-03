/*
Presentational component that displays a context for logging in to the application.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './defaultStyles.scss';
import { Link } from 'react-router';


// Requiring this image will cause Webpack to load it. Since it passes through
// Webpack's loaders, it may be returned as a normal URL or, in this case, a
// Data Url that will be embedded in the dom
const inlineImage = require("./sampleInlineImage.png");


class LoginContext extends Component {
  render() {
    return (
        <div styleName='welcome'>
            <h1>React/Redux Proof of Concept</h1>
            <h2>Coupon App</h2>

            <p>The application has been artificially divided into several pages in order to test routing. Login is automatic.</p>

            <Link to="/app">Log in</Link>

            <p>Below we are testing the inclusion of images using css modules.</p>
            
            <img src={inlineImage} />
            <div styleName='css-image-test'>There should be a background image here</div>
        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(LoginContext, styles);