/*
This is the entry point into the coupon application.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App.jsx';
import LoginContext from './contexts/login/LoginContext.jsx';
import ShoppingContext from './contexts/shopping/ShoppingContext.jsx';
import AdminContext from './contexts/admin/AdminContext.jsx';
import configureStore from './store/configureStore';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import FullCouponList from './containers/FullCouponList';
import CreateCouponForm  from './containers/CreateCouponForm.jsx';


// TODO pass initial state from local storage if available? Or from server if isomorphic?
const store = configureStore();

// Get the DOM element where the application will be inserted.
// Don't use <body> to avoid breaking other JS libraries that insert into the body.
const mountNode = document.getElementById('app');

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)


// Render the application into the given location
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={LoginContext} />
            <Route path="/app" component={App}>
                <Route path="/shopping" component={ShoppingContext} />
                <Route path="/coupons" component={AdminContext}>
                    <IndexRoute component={FullCouponList} />
                    <Route path="/coupons/new" component={CreateCouponForm} />
                {/*
                    <Route path="/coupons/:couponCode" component={CouponDetails} />
                */}
                </Route>
            </Route>
        </Router>
    </Provider>,
    mountNode
);


// <Route path="/admin/:couponCode" component={CouponDetails} />
// {this.props.params.couponCode}
// 
// <IndexRoute component={Home}/>