import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.scss';

let inlineImage = require("../sampleInlineImage.png");

let App;

App = class extends Component {
  render() {
    return (
        <div styleName='welcome'>
            Hello World!
            <img src={inlineImage} />
            <div styleName='css-image-test'>There should be a background image here</div>
        </div>
    );
  }
}

export default CSSModules(App, styles);