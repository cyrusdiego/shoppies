import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import { MovieActions } from './MovieActions';

export const Movie = ({ movie, actions, isActionVisible }) => {
  return (
    <Box margin='15%'>
      <Card>
        <CardMedia component='img' height='auto' image={movie.Poster} />
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {movie.Title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {movie.Year}
            </Typography>
          </CardContent>
        </CardActionArea>
        {isActionVisible && <MovieActions movie={movie} actions={actions} />}
      </Card>
    </Box>
  );
};
