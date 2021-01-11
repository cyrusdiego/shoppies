import {
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePage } from './components/MoviePage';
import SearchBar from './components/SearchBar';
import {
  addNomination,
  getMoviesRequest,
  removeNomination,
} from './redux/actions';
import { theme, useStyles } from './styles';
import React, { useState, useEffect } from 'react';

export const App = () => {
  const showNotification = useSelector(
    (state) => state.nominations.length === 5
  );
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const onSearch = (searchString) => dispatch(getMoviesRequest(searchString));

  useEffect(() => {
    setOpen(showNotification);
  }, [showNotification]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid
          container
          spacing={4}
          direction='column'
          alignItems='center'
          justify='center'
          style={{ minHeight: '100vh' }}
        >
          <Grid item container xs={6} alignItems='center' spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.header}>The Shoppies</Typography>
              <SearchBar onSearch={onSearch} />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item>
              <MoviePage />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity='success' onClose={handleClose}>
          Nominated 5 Movies!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};
