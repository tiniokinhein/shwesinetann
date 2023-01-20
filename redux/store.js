import { createStore , applyMiddleware , combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './auth/reducer'
import cartReducer from './cart/reducer'

const config = {
    authPersistConfig: {
        key: 'auth',
        storage
    },
    cartPersistConfig: {
        key: 'cart',
        storage
    }
}

const middleware = applyMiddleware(thunk , logger)

const Reducers = combineReducers({
    auth: persistReducer(config.authPersistConfig, authReducer),
    cart: persistReducer(config.cartPersistConfig, cartReducer)
})

const store = createStore(Reducers, middleware)
const persistor = persistStore(store)

export {
    store,
    persistor
}