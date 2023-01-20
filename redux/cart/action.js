export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DEL_PRODUCT = 'DEL_PRODUCT'
export const DEL_PRODUCTS = 'DEL_PRODUCTS'
export const ADD_ADDRESS = 'ADD_ADDRESS'
export const DEL_ADDRESS = 'DEL_ADDRESS'
export const ADD_BILLING = 'ADD_BILLING'
export const DEL_BILLING = 'DEL_BILLING'
export const ADD_WISHLIST = 'ADD_WISHLIST'
export const DEL_WISHLIST = 'DEL_WISHLIST'
export const DEL_WISHLISTS = 'DEL_WISHLISTS'

export const addProduct = item => ({
    type: ADD_PRODUCT,
    payload: item
})

export const delProduct = item => ({
    type: DEL_PRODUCT,
    payload: item
})

export const delProducts = items => ({
    type: DEL_PRODUCTS,
    payload: items
})

export const addAddress = item => ({
    type: ADD_ADDRESS,
    payload: item
})

export const delAddress = item => ({
    type: DEL_ADDRESS,
    payload: item
})

export const addBilling = item => ({
    type: ADD_BILLING,
    payload: item
})

export const delBilling = item => ({
    type: DEL_BILLING,
    payload: item
})

export const addWishlist = item => ({
    type: ADD_WISHLIST,
    payload: item
})

export const delWishlist = item => ({
    type: DEL_WISHLIST,
    payload: item
})

export const delWishlists = item => ({
    type: DEL_WISHLISTS,
    payload: item
})