import { createTheme, Grid, Link, makeStyles, responsiveFontSizes, ThemeProvider, Typography } from "@material-ui/core";
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let theme = createTheme();
theme = responsiveFontSizes(theme);

// theme.typography.h4 = {
//   fontSize: '1.1rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.7rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.6rem',
//   },
// };

  
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
            <Typography variant="h4" >
                Music
            </Typography>
          </ThemeProvider>
        </Link>
      </div>
        
    )
}

export default Logo;