/*
Container component that shows a list of all coupons.
Acts as a buffer so the presentational components don't need to know about Redux.
*/

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CouponList from '../components/couponList/CouponList.jsx'
import { fetchCoupons } from '../actions/coupons'



class FullCouponList extends Component {

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCoupons())
    }

    render() {
        const { coupons } = this.props
        return (
            <CouponList coupons={coupons} />
        )
    }
}

FullCouponList.propTypes = {
    coupons: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}


// Use the store to get the data needed by the subcomponents
const mapStateToProps = (state) => {
    return {
        coupons: state.couponApp.get("coupons").toJS() // TODO change component to accept immutable list?
    }
}


export default connect(mapStateToProps)(FullCouponList)