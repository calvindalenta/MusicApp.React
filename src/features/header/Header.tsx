import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import UserControl from './UserControl/UserControl';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'

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
          <Link href="/" underline='none' color='textPrimary'>
            <Grid container spacing={0}>
              <Grid item xs={2} style={{marginTop: 10}}>
                <FontAwesomeIcon icon={faRecordVinyl} size="lg"/>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h4">
                    {/* 
                    1. Get rid of the blue color
                    2. Make the text more bold
                    3. Get rid of the underline
                    */}
                    Music App
                </Typography>
              </Grid>
            </Grid>
          </Link>
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
