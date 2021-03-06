import { Button, Drawer, List, ListItem, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNomination } from '../redux/actions';
import { useStyles } from '../styles';
import { Movie } from './Movie';

export const NominationsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const nominations = useSelector((state) => state.nominations);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={toggleDrawer}>
        My Nominations
      </Button>
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer}
        disableElevation
        classes={{ paper: classes.drawer }}
      >
        <List>
          {nominations && nominations.length > 0 ? (
            <React.Fragment>
              <Typography align='center' className={classes.subheader}>
                My Nominations
              </Typography>
              {nominations.map((movie, i) => (
                <ListItem>
                  <Movie
                    movie={movie}
                    buttonText='Remove'
                    onClick={(m) => {
                      dispatch(removeNomination(m));
                    }}
                    isDisabled={() => false}
                  />
                </ListItem>
              ))}
            </React.Fragment>
          ) : (
            <Typography align='center'>No Nominations</Typography>
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
};
