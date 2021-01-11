import { Box, TextField } from '@material-ui/core';
import { useStyles } from '../styles';

const SearchBar = ({ onSearch }) => {
  const classes = useStyles();
  return (
    <Box className={classes.searchBar}>
      <TextField
        id='search'
        helperText='Search Movie titles...'
        autoComplete='off'
        fullWidth
        onChange={(e) => {
          onSearch(e.target.value.trim(), 1);
        }}
      />
    </Box>
  );
};

export default SearchBar;
