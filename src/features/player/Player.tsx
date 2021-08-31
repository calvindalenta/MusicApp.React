import { Grid, LinearProgress, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../slices/trackSlice';
import ProgressBar from './ProgressBar';

function Player() {

  const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        bottom: 0,
        height: "10vh",
        width: '100%',
        backgroundColor: 'red',
    },
  }));

  const tracks = useSelector(selectTrackState).value;

  const classes = useStyles();
//   const audioUrl = '/api/track/' + tracks[0].id;
  return (
    <div className={classes.container}>
        <ProgressBar/>
        {/* <audio controls src={audioUrl}/> */}
    </div>
  );
}

export default Player;
