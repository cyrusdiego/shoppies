import { Box, Card, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { NOMINATION, SEARCH_RESULTS } from '../App';
import { Movie } from './Movie';
import { MovieActions } from './MovieActions';

export const MovieList = ({ movies, actions }) => {
  const nominations = useSelector((state) => state.nominations);

  return (
    <Box width='25%'>
      {movies.map((item) => (
        <Card>
          <Movie movie={item} />
          {(actions.type === NOMINATION ||
            (actions.type === SEARCH_RESULTS &&
              !nominations.includes(item))) && (
            <MovieActions movie={item} actions={actions} />
          )}
        </Card>
      ))}
    </Box>
  );
};
