import { Button, CardActions } from '@material-ui/core';

export const MovieActions = ({ movie, actions }) => {
  return (
    <CardActions>
      <Button
        size='small'
        color='primary'
        onClick={(_) => actions.button.onClick(movie)}
      >
        {actions.button.text}
      </Button>
    </CardActions>
  );
};
