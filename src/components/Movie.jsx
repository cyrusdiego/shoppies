import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useState } from 'react';
import ScrollText from 'react-scroll-text';
import { useStyles } from '../styles';

export const Movie = ({ movie, buttonText, onClick, isDisabled }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const onImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <Paper className={classes.movieCard}>
      <Grid
        container
        alignItems='center'
        xs
        justify='center'
        alignContent='center'
        direction='column'
        wrap='nowrap'
      >
        <Grid item className={classes.imageContainer}>
          <img
            className={classes.image}
            alt=''
            src={movie.Poster}
            onLoad={onImageLoaded}
          />
          {isLoading && (
            <Skeleton variant='rect' className={classes.skeleton} />
          )}
        </Grid>
        <Grid item xs>
          <ScrollText speed={30}>{movie.Title}</ScrollText>
        </Grid>
        <Grid item xs>
          <Typography variant='body1'>{movie.Year}</Typography>
        </Grid>
        <Grid item xs>
          <Button
            variant='outlined'
            size='small'
            onClick={(_) => onClick(movie)}
            disabled={isDisabled(movie)}
            fullWidth
          >
            {buttonText}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
