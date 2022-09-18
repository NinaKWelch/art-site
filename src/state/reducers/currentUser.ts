import { User } from '../../types'

export type CurrentUserState = {
  currentUser: User | null
};

export type CurrentUserAction  =
| { type: 'LOGIN_USER', payload: User }
| { type: 'LOGOUT_USER' }

export const currentUser = (state: CurrentUserState, action: CurrentUserAction): CurrentUserState => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
}