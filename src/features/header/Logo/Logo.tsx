import { createTheme, Link, ThemeProvider, Typography } from "@material-ui/core";
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const theme = createTheme();

theme.typography.h4 = {
  fontSize: '1.4rem',
  '@media (min-width:600px)': {
    fontSize: '1.7rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.6rem',
  },
};

function Logo(){

    return (
        <Link href="/" underline='none' color='textPrimary'>
            {/* <Grid container spacing={0}>
              <Grid item xs={2} style={{marginTop: 10}}>
                <FontAwesomeIcon icon={faRecordVinyl} size="lg"/>
              </Grid>
              <Grid item xs={10}> */}
                <ThemeProvider theme={theme}>
                  <Typography variant="h4">
                      {/* 
                      1. Get rid of the blue color
                      2. Make the text more bold
                      3. Get rid of the underline
                      */}
                      Music
                  </Typography>
                </ThemeProvider>
{/*                 
              </Grid>
            </Grid> */}
          </Link>
    )
}

export default Logo;