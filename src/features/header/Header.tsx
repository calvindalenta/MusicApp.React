import { Grid, makeStyles, Paper, Slider, TextField, withStyles } from '@material-ui/core';
import UserControl from './UserControl/UserControl';
import Logo from './Logo/Logo';
import SearchIcon from '@material-ui/icons/Search';

function Header() {

  const useStyles = makeStyles((theme) => ({
    header: {
      //backgroundColor: "aquamarine",
      // width: "100%",
      height: "10vh",
      margin: "2vh 0"
    },
    textField: {
      verticalAlign: 'middle',
      marginTop: '2.5vh',
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
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
          <Paper elevation={0} style={{width: '100%', backgroundColor: '#f9f9fb', borderRadius: '25px'}}>
            <SearchIcon color="disabled" style={{position: 'relative', left: '1%', top: '0.5vh'}}/>
            <TextField 
            id="main-search" 
            placeholder="Search for songs, artists, albums, etc..." 
            InputProps={{disableUnderline: true}}
            type="search" 
            style={{marginLeft: '1%', width: '92%'}}>
              </TextField>
          </Paper>

        </Grid>

        <Grid item xs={2}>
          <UserControl/>
        </Grid>

      </Grid>
      
    </div>
  );
}

export default Header;
