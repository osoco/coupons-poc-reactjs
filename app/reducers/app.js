/*
Defines the root reducer for the application
*/

import { combineReducers } from 'redux'
import coupons from './coupons'


const appReducer = combineReducers({
  coupons
})


export default appReducer