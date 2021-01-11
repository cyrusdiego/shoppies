import {
  CssBaseline,
  Grid,
  Snackbar,
  ThemeProvider,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MoviePage } from './components/MoviePage';
import { NominationsPage } from './components/NominationsPage';
import SearchBar from './components/SearchBar';
import { getMoviesRequest } from './redux/actions';
import { theme, useStyles } from './styles';

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
              <Grid item direction='column'>
                <Typography className={classes.header}>The Shoppies</Typography>
                <NominationsPage />
              </Grid>
              <SearchBar onSearch={onSearch} />
            </Grid>
          </Grid>
          <Grid item xs={12} alignItems='center' justify='center'>
            <MoviePage />
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
