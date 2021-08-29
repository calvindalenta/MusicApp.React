import { Grid, makeStyles, TextField } from '@material-ui/core';
import UserControl from './UserControl/UserControl';
import Logo from './Logo/Logo';

function Header() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>

        <Grid item xs={2} style={{marginTop: 10}}>
          <Logo/>
        </Grid>

        <Grid item xs={8}>
          <TextField id="main-search" fullWidth label="Search for songs, artists, albums, etc..." type="search" />
        </Grid>

        <Grid item xs={2} style={{marginTop: 10}}>
          <UserControl/>
        </Grid>

      </Grid>
      
    </div>
  );
}

export default Header;
