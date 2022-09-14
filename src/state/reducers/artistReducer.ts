import { Artist } from '../../types';

export type ArtistState = {
  artists: { [id: string]: Artist };
};

export type ArtistAction =
  | {
      type: 'SET_ARTIST_LIST';
      payload: Artist[];
    }
  | {
      type: 'ADD_ARTIST';
      payload: Artist;
    };

export const artistReducer = (state: ArtistState, action: ArtistAction): ArtistState => {
  switch (action.type) {
    case 'SET_ARTIST_LIST':
      return {
        ...state,
        artists: {
          ...action.payload.reduce(
            (memo, artist) => ({ ...memo, [artist.nameUrl]: artist }),
            {}
          ),
          ...state.artists
        }
      };
    case 'ADD_ARTIST':
      return {
        ...state,
        artists: {
          ...state.artists,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};