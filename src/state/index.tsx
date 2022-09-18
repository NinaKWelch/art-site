import React, { createContext, useReducer, useContext, useMemo } from 'react';
import { ArtistState, ArtistAction }  from './reducers/artists';
import { CurrentUserState, CurrentUserAction } from './reducers/currentUser';

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
  // Memoize array value. Else all context consumers update on *every* render
  // https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
  return (
    <AppStateContext.Provider value={useMemo(() => [state, dispatch], [state])}>
      {children}
    </AppStateContext.Provider>
  );
};

