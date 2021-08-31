import { Grid, LinearProgress, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../slices/trackSlice';
import ProgressBar from './ProgressBar';

function Player() {

  const useStyles = makeStyles((theme) => ({
    audioPlayerContainer: {
        position: 'fixed',
        bottom: 0,
        height: "10vh",
        width: '100%',
        backgroundColor: 'white',
    },
  }));

  const tracks = useSelector(selectTrackState).value;

  const classes = useStyles();
  const audioUrl = '/api/test/track';

  return (
    <div className={classes.audioPlayerContainer}>
        <ProgressBar/>
        <audio id="player" controls src={audioUrl}/>
    </div>
  );
}

export default Player;
