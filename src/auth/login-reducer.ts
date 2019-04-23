import axios from 'axios'
import { User } from './auth.types'
import { Reducer, Action } from 'redux'

const LOGIN = 'auth/login'
const LOGOUT = 'auth/logout'

export interface AuthState {
    isAuthenticated: boolean
    token: string | null
    user: User | null
}

const defaultState: AuthState = {
    isAuthenticated: false,
    token: null,
    user: {
        userId: '',
        username: '',
        roles: [],
    },
}
export const LoginReducer: Reducer<AuthState> = (
    state: AuthState = defaultState,
    action: AuthActionTypes,
): AuthState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: (action as LoginAction).user,
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state
    }
}

export interface LoginAction extends Action {
    type: string
    user: User
}
export const login = (email: string, password: string) => (dispatch: Function) => {
    //dispatch loading action
    //dispatch({ type: LOGIN, user: { userId: '1', username: 'fakeUser', roles: ['admin'] } })
    // async login
    axios.get('https://reqres.in/api/users?page=2').then(data => {
        console.log(data)
        dispatch({ type: LOGIN, user: { userId: '1', username: 'fakeUser', roles: ['admin'] } })
    })
}

interface LogoutAction extends Action {
    type: string
}
export function logout() {
    return { type: LOGOUT }
}

type AuthActionTypes = LoginAction | LogoutAction
