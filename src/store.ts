/* Root Reducer */
import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { LoginReducer, AuthState } from './auth/login-reducer';


export interface AppState {
    auth: AuthState;
}

const reducers: Reducer<AppState> = combineReducers<AppState>({
    auth: LoginReducer,
})

const composeEnhancers =
    typeof window === 'object' &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
        // other store enhancers if any
    )
)
