import * as actions from './coupons'
// import * as types from '../../constants/ActionTypes'

describe('actions', () => {

    it('should create an action to delete a coupon', () => {
        const id = 'some id'
        const expectedAction = {
            type: actions.DELETE_COUPON,
            id
        }
        expect(actions.deleteCoupon(id)).to.deep.equal(expectedAction)
    })

})
