export const ADD_AUTH = 'ADD_AUTH'
export const REMOVE_AUTH = 'REMOVE_AUTH'

export const addAuth = auth => ({
    type: ADD_AUTH,
    payload: auth
})

export const removeAuth = auth => ({
    type: REMOVE_AUTH,
    payload: auth
})