import { Grid, Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNomination, searchMovieAsync } from '../redux/actions';
import { splitToChunks } from '../utils';
import { Movie } from './Movie';

export const MoviePage = () => {
  const movies = useSelector((state) => state.movies);
  const [page, setPage] = useState(1);
  const searchString = useSelector((state) => state.searchString);
  const totalPage = useSelector((state) => Math.ceil(state.total / 10));
  const isLoading = useSelector((state) => state.isLoading);
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

  const MovieRow = ({ row }) => {
    const nominations = useSelector((state) => state.nominations);
    const atMaxNominations = useSelector(
      (state) => state.nominations.length === 5
    );

    return (
      <React.Fragment>
        {row.map((r) => (
          <Grid item xs={1} key={r.imdbID}>
            <Movie
              movie={r}
              buttonText='Nominate'
              onClick={(movie) => {
                dispatch(addNomination(movie));
              }}
              isVisible={(movie) =>
                !atMaxNominations && !nominations.includes(movie)
              }
            />
          </Grid>
        ))}
      </React.Fragment>
    );
  };

  return movies && searchString.length > 0 ? (
    <Grid
      container
      direction='column'
      alignItems='center'
      justify='center'
      spacing={2}
    >
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
          <Grid item container justify='center' alignItems='center'>
            <Pagination count={totalPage} page={page} onChange={onPageChange} />
          </Grid>
        </Grid>
      ) : (
        <Grid item>
          <Typography> No Results</Typography>
        </Grid>
      )}
    </Grid>
  ) : null;
};
