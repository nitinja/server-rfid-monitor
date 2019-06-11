import { Action, Reducer } from 'redux'

export interface AuthState {
  userId: string
  username: string
  roles: Array<string>
}

const defaultState = {
  userId: '',
  username: '',
  roles: [],
}
export const LoginReducer: Reducer = (
  state: AuthState = defaultState,
  action: Action
): AuthState => {
  return defaultState
}
