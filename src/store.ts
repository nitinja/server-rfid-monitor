/* Root Reducer */
import { combineReducers, createStore } from 'redux'
import { LoginReducer } from './auth/login-reducer'

const reducers = combineReducers({
  auth: LoginReducer,
})

export const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
