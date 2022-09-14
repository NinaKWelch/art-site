import React, { createContext, useReducer, useContext } from 'react';
import { ArtistState, ArtistAction }  from './reducers/artistReducer';
import { CurrentUserState, CurrentUserAction } from './reducers/currentUserReducer';

export type AppState = ArtistState & CurrentUserState
export type AppAction = ArtistAction | CurrentUserAction

const initialState: AppState = {
  artists: {},
  currentUser: null,
};

// Context
const AppStateContext = createContext<[AppState, React.Dispatch<AppAction>]>([
  initialState,
  () => initialState
]);

export const useAppStateValue = () => useContext(AppStateContext);

type AppStateProviderProps = {
  reducer: React.Reducer<AppState, AppAction>;
  children: React.ReactElement;
};

// Provider
export const AppStateProvider = ({
  reducer,
  children
}: AppStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={[ state, dispatch ]}>
      {children}
    </AppStateContext.Provider>
  );
};

