import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage'
import appOrderReducer from '../services/redux/reducer'

const persistConfig = {
	key: 'root',
	storage: storageSession
}

export const rootReducers = combineReducers({
	orderReducer: appOrderReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMidlleware) => getDefaultMidlleware({
		serializableCheck: false
	})
})

export const persistor = persistStore(store)