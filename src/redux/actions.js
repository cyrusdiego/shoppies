import axios from 'axios';

export const MOVIE_RESULTS = "movie_results";
export const ADD_NOMINATION = "add_nomination";
export const REMOVE_NOMINATION = "remove_nomination";
export const SEARCH_STRING = "search_string";

const movieResults = (results, totalResults) => ({
    type: MOVIE_RESULTS,
    payload: {
        movies: results,
        total: totalResults
    }
});

export const addNomination = movie => ({
    type: ADD_NOMINATION,
    payload: movie
});

export const removeNomination = movie => ({
    type: REMOVE_NOMINATION,
    payload: movie
});

export const setSearchString = searchString => ({
    type: SEARCH_STRING,
    payload: searchString
});

export const searchMovieAsync = (searchString, page) => {
    return dispatch => {
        axios.get('http://www.omdbapi.com', {
            params: {
                i: 'tt3896198',
                apikey: '72d02239',
                s: searchString,
                page: page
            }
        })
            .then(resp => {
                dispatch(setSearchString(searchString));
                dispatch(movieResults(resp.data.Search, resp.data.totalResults ));
        })
    }
}