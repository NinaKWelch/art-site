import { artistReducer, ArtistState, ArtistAction } from './artistReducer';
import { currentUserReducer, CurrentUserState, CurrentUserAction }  from './currentUserReducer';
//import { AppState, AppAction } from '../index';

interface AppReducer {
  artists: React.Reducer<ArtistState, ArtistAction>;
  currentUser: React.Reducer<CurrentUserState, CurrentUserAction>;
};

// https://codezup.com/how-to-combine-multiple-reducers-in-react-hooks-usereducer/
const combineReducers = (reducers: AppReducer) => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, prop) => {
        return ({
          ...acc,
          ...reducers[prop]({ [prop]: acc[prop] }, action),
        })
      },
      state
    )
  }
}

export const appReducer = combineReducers({
  artists: artistReducer,
  currentUser: currentUserReducer,
});
