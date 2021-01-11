import { Paper, Grid, Button, Typography } from '@material-ui/core';
import { useStyles } from '../styles';

export const Movie = ({ movie, buttonText, onClick, isVisible }) => {
  const classes = useStyles();

  return (
    <div className={classes.movieCardRoot}>
      <Paper className={classes.movieCard}>
        <Grid container spacing={2} alignItems='flex-end'>
          <Grid item className={classes.imageContainer}>
            <img className={classes.image} alt='' src={movie.Poster} />
          </Grid>
          <Grid item xs container direction='column' wrap='nowrap'>
            <Grid item>
              <Typography noWrap gutterBottom variant='subtitle1'>
                {movie.Title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant='body1'>
                {movie.Year}
              </Typography>
            </Grid>
            <Grid item>
              {isVisible(movie) ? (
                <Button onClick={(_) => onClick(movie)}>{buttonText}</Button>
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
