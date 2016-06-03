import * as actions from './coupons'

describe('actions', () => {

    it('should create an action to request a new coupon', () => {
        const expectedAction = {
            type: actions.REQUEST_NEW_COUPON
        }
        expect(actions.requestNewCoupon()).to.deep.equal(expectedAction)
    })

})
