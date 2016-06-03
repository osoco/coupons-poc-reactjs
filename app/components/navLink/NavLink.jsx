/*
A Link that adds the class "active" when the destination page is being shown.
*/

import React, {Component} from 'react'
import { Link } from 'react-router'
import CSSModules from 'react-css-modules';
import styles from './defaultStyles.scss';


class NavLink extends Component {
  render() {
    return <Link {...this.props} activeClassName={this.props.styles.active} />
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(NavLink, styles);