import { Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieAsync } from '../redux/actions';
import { splitToChunks } from '../utils';
import { MovieRow } from './MovieRow';

export const MoviePage = () => {
  const movies = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const searchString = useSelector((state) => state.searchString);
  const totalPage = useSelector((state) => Math.ceil(state.total / 10));
  const error = useSelector((state) => state.error);
  const movieRows = splitToChunks(movies, 5);
  const dispatch = useDispatch();

  const onPageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (searchString && page > 0) {
      dispatch(searchMovieAsync(searchString, page));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchString]);

  return (
    movies &&
    searchString.length > 0 && (
      <React.Fragment>
        {movies.length > 0 ? (
          <Grid container item spacing={2}>
            {movieRows.map((row, i) => (
              <Grid
                container
                item
                spacing={2}
                justify='center'
                alignItems='center'
                key={i}
              >
                <MovieRow row={row} />
              </Grid>
            ))}
            <Grid item container justify='center'>
              <Pagination
                count={totalPage}
                page={page}
                onChange={onPageChange}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid item>
            <Typography variant='subtitle1'>
              {error ? 'Error' : 'No Results'}
            </Typography>
          </Grid>
        )}
      </React.Fragment>
    )
  );
};
