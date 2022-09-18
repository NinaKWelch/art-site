import { artists, ArtistState, ArtistAction } from './artists';
import { currentUser, CurrentUserState, CurrentUserAction }  from './currentUser';
import { AppState, AppAction } from '../index';

// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers

interface AppReducers {
  artists: React.Reducer<ArtistState, ArtistAction>;
  currentUser: React.Reducer<CurrentUserState, CurrentUserAction>;
}

// NOTE: for the lack of a solution I have temporarily used type any for action
// https://stackoverflow.com/questions/49219531/why-was-the-never-type-introduced-in-typescript/49225093#49225093
const combineReducers = (reducers: AppReducers) => (state: AppState, action: AppAction): AppState => {
  return Object.keys(reducers).reduce(
    (acc, prop) => ({
        ...acc,
        [prop]: reducers[prop as keyof typeof reducers](acc[prop as keyof typeof artists | keyof typeof currentUser], action as any),
      }),
    state
  )
}
  
export const appReducer = combineReducers({ artists, currentUser });