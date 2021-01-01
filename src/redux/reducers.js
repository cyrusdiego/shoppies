import {
  MOVIE_RESULTS,
  ADD_NOMINATION,
  REMOVE_NOMINATION,
  SEARCH_STRING,
} from './actions';

const initialState = {
  searchResults: [],
  nominations: [],
  nominationCount: 0,
  searchString: '',
  total: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_RESULTS:
      return {
        ...state,
        searchResults: action.payload.movies,
        total: action.payload.total,
      };
    case ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
        nominationCount: state.nominationCount + 1,
      };
    case REMOVE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(
          (movie) => movie !== action.payload
        ),
        nominationCount: state.nominationCount - 1,
      };
    case SEARCH_STRING:
      return { ...state, searchString: action.payload, total: 0 };
    default:
      return state;
  }
};
