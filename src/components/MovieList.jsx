import { Movie } from './Movie';
import { Box } from '@material-ui/core';
import { NOMINATION, SEARCH_RESULTS } from '../App';
import { useSelector } from 'react-redux';

export const MovieList = ({ movies, actions }) => {
  const nominations = useSelector((state) => state.nominations);
  return (
    <Box width='25%'>
      {movies.map((item) => (
        <Movie
          movie={item}
          actions={actions}
          isActionVisible={
            actions.type === NOMINATION ||
            (actions.type === SEARCH_RESULTS && !nominations.includes(item))
          }
        />
      ))}
    </Box>
  );
};
