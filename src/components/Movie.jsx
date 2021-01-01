import { Box, CardContent, CardMedia, Typography } from '@material-ui/core';

export const Movie = ({ movie }) => {
  return (
    <Box>
      <CardMedia component='img' height='auto' image={movie.Poster} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {movie.Title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {movie.Year}
        </Typography>
      </CardContent>
    </Box>
  );
};
