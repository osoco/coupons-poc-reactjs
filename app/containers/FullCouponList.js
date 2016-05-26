/*
Container component that shows a list of all coupons.
Acts as a buffer so the presentational components don't need to know about Redux.
*/

import { connect } from 'react-redux'
import CouponList from '../components/CouponList.jsx'


// Use the store to get the data needed by the subcomponents
const mapStateToProps = (state) => {
    console.log(state.coupons.toJS());
    return {
        coupons: state.coupons.toJS() // TODO change component to accept immutable list?
    }
}

// Create callbacks that subcomponents can use to dispatch actions indirectly
const mapDispatchToProps = (dispatch) => {
    return {
        // No callbacks for now...
    }
}


const FullCouponList = connect(
    mapStateToProps,
    mapDispatchToProps
)(CouponList)


export default FullCouponList