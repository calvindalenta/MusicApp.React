import { Grid, makeStyles, TextField } from '@material-ui/core';
import UserControl from './UserControl/UserControl';
import Logo from './Logo/Logo';

function Header() {

  const useStyles = makeStyles((theme) => ({
    header: {
      //backgroundColor: "aquamarine",
      width: "100%",
      height: "10vh",
    },
    textField: {
      height: "10vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      //backgroundColor: "lightblue",
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.header}>

      <Grid container spacing={0}>

        <Grid item xs={2}>
          <Logo/>
        </Grid>

        <Grid item xs={8} className={classes.textField}>
          <TextField 
          id="main-search" 
          fullWidth 
          label="Search for songs, artists, albums, etc..." 
          type="search" 
          style={{overflow: "auto"}}/>
        </Grid>

        <Grid item xs={2}>
          <UserControl/>
        </Grid>

      </Grid>
      
    </div>
  );
}

export default Header;
