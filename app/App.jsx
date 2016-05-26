/*
Presentational component that displays the entire application.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';
import FullCouponList from './containers/FullCouponList'


// Requiring this image will cause Webpack to load it. Since it passes through
// Webpack's loaders, it may be returned as a normal URL or, in this case, a
// Data Url that will be embedded in the dom
const inlineImage = require("../sampleInlineImage.png");


class App extends Component {
  render() {
    return (
        <div styleName='welcome'>
            <h1>Hello World!</h1>
            <img src={inlineImage} />
            <div styleName='css-image-test'>There should be a background image here</div>
            <FullCouponList />
        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(App, styles);