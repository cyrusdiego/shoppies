import { Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNomination } from '../redux/actions';
import { Movie } from './Movie';

export const MovieRow = ({ row }) => {
  const nominations = useSelector((state) => state.nominations);
  const atMaxNominations = useSelector(
    (state) => state.nominations.length === 5
  );
  const dispatch = useDispatch();

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
            isDisabled={(movie) =>
              atMaxNominations || nominations.includes(movie)
            }
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};
