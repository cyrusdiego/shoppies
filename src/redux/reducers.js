import {
  ADD_NOMINATION,
  GET_MOVIES_FAILURE,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  REMOVE_NOMINATION,
} from './actions';

const initialState = {
  movies: [],
  nominations: [],
  searchString: '',
  total: -1,
  error: {},
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        total: action.payload.total,
        error: {},
        isLoading: false,
      };

    case GET_MOVIES_REQUEST:
      return {
        ...state,
        searchString: action.payload,
        total: 0,
        isLoading: true,
      };

    case GET_MOVIES_FAILURE:
      return { ...state, error: action.payload, isLoading: false };

    case ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload],
      };

    case REMOVE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(
          (movie) => movie !== action.payload
        ),
      };

    default:
      return state;
  }
};
