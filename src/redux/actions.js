import axios from 'axios';

export const MOVIE_RESULTS = "movie_results";

export const movieResults = results => ({
    type: MOVIE_RESULTS,
    payload: results
});

export const searchMovieAsync = searchString => {
    return dispatch => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=72d02239&s='${searchString}'`)
            .then(resp => {
                console.log(resp);
                dispatch(movieResults(resp.data.Search));
        })
    }
}