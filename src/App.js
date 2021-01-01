import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import SearchBar from './components/SearchBar';
import { MovieList } from './components/MovieList';
import {
  addNomination,
  removeNomination,
  searchMovieAsync,
} from './redux/actions';
import { Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MoviePage } from './components/MoviePage';

export const SEARCH_RESULTS = 'search_results';
export const NOMINATION = 'nomination';

export const App = () => {
  const searchResults = useSelector((state) => state.searchResults);
  const nominations = useSelector((state) => state.nominations);
  const dispatch = useDispatch();

  const searchResultActions = {
    type: SEARCH_RESULTS,
    button: {
      text: 'Nominate',
      onClick: (movie) => {
        dispatch(addNomination(movie));
      },
    },
  };

  const nominationActions = {
    type: NOMINATION,
    button: {
      text: 'Remove nomination',
      onClick: (movie) => {
        dispatch(removeNomination(movie));
      },
    },
  };

  const handleClose = () => {
    return;
  };

  return (
    <div className='App'>
      <SearchBar search={searchMovieAsync} />
      <Grid container direction='row' justify='center' alignItems='stretch'>
        {searchResults && searchResults.length > 0 && (
          <MoviePage movies={searchResults} actions={searchResultActions} />
        )}
        {nominations && nominations.length > 0 && (
          <MovieList movies={nominations} actions={nominationActions} />
        )}
      </Grid>
      <Snackbar
        open={nominations.length === 5}
        autoHideDuration={6000}
        handleClose={() => handleClose()}
      >
        <Alert severity='success'>Nominated 5 Movies!</Alert>
      </Snackbar>
    </div>
  );
};
