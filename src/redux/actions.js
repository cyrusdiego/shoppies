import axios from 'axios';

export const GET_MOVIES_REQUEST = 'get_movies_request';
export const GET_MOVIES_SUCCESS = 'get_movies_success';
export const GET_MOVIES_FAILURE = 'get_movie_failure';
export const ADD_NOMINATION = 'add_nomination';
export const REMOVE_NOMINATION = 'remove_nomination';

const BASE_URL = 'http://www.omdbapi.com';
const API_KEY = '72d02239';

export const addNomination = (movie) => ({
  type: ADD_NOMINATION,
  payload: movie,
});

export const removeNomination = (movie) => ({
  type: REMOVE_NOMINATION,
  payload: movie,
});

export const getMoviesRequest = (searchString) => ({
  type: GET_MOVIES_REQUEST,
  payload: searchString,
});

const getMoviesSuccess = (results, totalResults) => ({
  type: GET_MOVIES_SUCCESS,
  payload: {
    movies: results || [],
    total: totalResults || 0,
  },
});

const getMoviesFailure = (error) => ({
  type: GET_MOVIES_FAILURE,
  payload: error,
});

export const searchMovieAsync = (searchString, page) => {
  return (dispatch) => {
    axios
      .get(BASE_URL, {
        params: {
          apikey: API_KEY,
          s: searchString,
          page: page,
        },
      })
      .then((resp) => {
        dispatch(getMoviesSuccess(resp.data.Search, resp.data.totalResults));
      })
      .catch((e) => {
        dispatch(getMoviesFailure(e));
      });
  };
};
