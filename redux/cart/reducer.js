import {
    ADD_ADDRESS,
    ADD_BILLING,
    ADD_PRODUCT,
    ADD_WISHLIST,
    DEL_ADDRESS,
    DEL_BILLING,
    DEL_PRODUCT,
    DEL_PRODUCTS,
    DEL_WISHLIST,
    DEL_WISHLISTS
} from './action'

const initialState = {
    carts: [],
    address: [],
    billing: [],
    wishlists: [],
    notifications: [
        {
            id: 1,
            title: 'Your order is on the way',
            date: '11/25/2022',
            time: '11:00 AM',
            status: 'delivering'
        },
        {
            id: 2,
            title: 'Your order have been prepared.',
            date: '11/24/2022',
            time: '10:00 AM',
            status: 'preparing'
        },
    ]
}

export default function cartReducer(state=initialState , action) {
    const { payload , type } = action
    
    switch (type) {
        case ADD_PRODUCT:
            let data = state.carts.filter(f => f.id === payload.id).length 
            if(data === 0) {
                return {
                    ...state,
                    carts: [
                        ...state.carts,
                        payload
                    ]
                }
            } else {
                return {
                    ...state,
                    carts: state.carts
                }
            }
            
        case DEL_PRODUCT: 
            return {
                ...state,
                carts: state.carts.filter(f => f.id !== payload.id)
            }
    
        case DEL_PRODUCTS:
            return {
                ...state,
                carts: []
            }

        case ADD_ADDRESS:
            let items = state.address.filter(f => f.phone === payload.phone).length 
            if(items === 0) {
                return {
                    ...state,
                    address: [
                        ...state.address,
                        payload
                    ]
                }
            } else {
                return {
                    ...state,
                    address: state.address
                }
            }

        case DEL_ADDRESS:
            return {
                ...state,
                address: state.address.filter(f => f.phone !== payload.phone)
            }

        case ADD_BILLING:
            let billing = state.billing.filter(f => f.phone === payload.phone).length 
            if(billing === 0) {
                return {
                    ...state,
                    billing: [
                        ...state.billing,
                        payload
                    ]
                }
            } else {
                return {
                    ...state,
                    billing: state.billing
                }
            }

        case DEL_BILLING:
            return {
                ...state,
                billing: state.billing.filter(f => f.phone !== payload.phone)
            }

        case ADD_WISHLIST:
            let wishlist = state.wishlists.filter(f => f.id === payload.id).length
            if(wishlist === 0) {
                return {
                    ...state,
                    wishlists: [
                        ...state.wishlists,
                        payload
                    ]
                }
            } else {
                return {
                    ...state,
                    wishlists: state.wishlists
                }
            }

        case DEL_WISHLIST:
            return {
                ...state,
                wishlists: state.wishlists.filter(f => f.id !== payload.id)
            }

        case DEL_WISHLISTS:
            return {
                ...state,
                wishlists: []
            }
    
        default:
            return state 
    }
}