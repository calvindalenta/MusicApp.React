import { createTheme, Grid, Link, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './icon.jpg';


let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h4 = {
  fontWeight: 'bold',
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontWeight: 'bold',
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontWeight: 'bold',
    fontSize: '2.3rem',
  },
};

  
function Logo(){
    const useStyles = makeStyles((theme) => ({
      header: {
        height: "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        // verticalAlign: "middle",
        // margin: "auto",
        // textAlign: "center",
      },
    }));

    const classes = useStyles();

    return (
      <div className={classes.header}>
        <Link href="/" underline='none' color='textPrimary' >
          {/* <FontAwesomeIcon icon={faRecordVinyl} size="lg"/> */}
          <ThemeProvider theme={theme}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <img alt="Music Logo" src={logo} height="30vh" style={{marginTop: '1vh'}}/>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h4" >
                    Music
                </Typography>
              </Grid>
            </Grid>
          </ThemeProvider>
        </Link>
      </div>
        
    )
}

export default Logo;