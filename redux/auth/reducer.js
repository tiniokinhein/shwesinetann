import { ADD_AUTH, REMOVE_AUTH } from './action'

const initialState = {
    isLogin: false,
    userData: null
}

export default function authReducer(state=initialState , action) {
    const { payload, type } = action

    switch (type) {
        case ADD_AUTH:
            return {
                isLogin: true,
                userData: payload
            }

        case REMOVE_AUTH:
            return {
                isLogin: false,
                userData: null
            }
    
        default:
            return state
    }
}