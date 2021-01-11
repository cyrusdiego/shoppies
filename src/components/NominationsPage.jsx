import { Button, Drawer, List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNomination } from '../redux/actions';
import { Movie } from './Movie';

export const NominationsPage = () => {
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
    <div>
      <Button onClick={toggleDrawer}>My Nominations</Button>
      <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer}>
        <List>
          {nominations && nominations.length > 0 ? (
            <div>
              {nominations.map((movie, i) => (
                <ListItem key={i}>
                  <Movie
                    movie={movie}
                    buttonText='Remove'
                    onClick={(m) => {
                      dispatch(removeNomination(m));
                    }}
                    isVisible={() => true}
                  />
                </ListItem>
              ))}
            </div>
          ) : (
            <ListItem>No Nominations</ListItem>
          )}
        </List>
      </Drawer>
    </div>
  );
};
