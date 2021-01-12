import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    textAlign: 'center',
  },
  searchBar: {
    color: theme.palette.primary,
  },
  header: {
    fontWeight: 100,
    fontSize: 32,
    color: theme.palette.primary,
  },
  subheader: {
    fontWeight: 100,
    fontSize: 20,
    color: theme.palette.primary,
  },
  movieCard: {
    padding: theme.spacing(2),
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    width: 128,
    height: 128,
  },
  image: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  skeleton: {
    width: '100%',
    height: '100%',
  },
  drawer: {
    width: '10vw',
  },
}));

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
    background: {
      default: '#64943E',
    },
  },
});
