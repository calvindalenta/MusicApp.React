import { Grid, Link, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import UserControl from './UserControl/UserControl';

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
          <Typography variant="h4">
            {/* 
            1. Get rid of the blue color
            2. Make the text more bold
            */}
            <Link href="/">
            Music App
            </Link>
          </Typography>
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
