import React, { createContext, useReducer } from 'react';
import { User } from '../types/mockTypes'

type UserState = typeof initialState;
type Action =
| { type: 'LOGIN_USER', payload: User }
| { type: 'LOGOUT_USER' }

export interface UserProviderProps {
  children: React.ReactNode;
}

export const initialState = {
  currentUser: {},
};

const reducer = (state: UserState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
}

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} })

const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };