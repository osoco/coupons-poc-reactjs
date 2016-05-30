/*
Defines the root reducer for the application
*/

import { combineReducers } from 'redux'
import coupons from './coupons'
import { routerReducer } from 'react-router-redux'


const appReducer = combineReducers({
  coupons,
  routing: routerReducer
})


export default appReducer