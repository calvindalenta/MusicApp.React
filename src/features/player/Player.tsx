import { Grid, LinearProgress, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';
import { relative } from 'path';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAudioPlayerState, setDuration, setCurrentTime} from '../../slices/playerSlice';
import { selectTrackState } from '../../slices/trackSlice';
import Duration from './Duration';
import PlayPauseButton from './PlayPauseButton';
import ProgressBar from './ProgressBar';
import TrackInfo from './TrackInfo';
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Volume from './Volume';
function Player() {

  const useStyles = makeStyles((theme) => ({
    audioPlayerContainer: {
        position: 'fixed',
        bottom: 0,
        height: "12.5vh",
        width: '100%',
        backgroundColor: 'white',
    },
    progressBarContainer: {
        top: '-1vh',
    },
    audioPlayerItems: {
      height: '100%',
      // backgroundColor: 'lightblue',
      // position: 'relative',
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      // margin: '3vh',
      // marginTop: '1vh'
      margin: '0 5vh',
    },
    item: {

      // borderRight: '10px red solid',
      // transform: 'translate(25%, 25%)',
      // transform: 'translateX(25%)',
      // // margin: '0 25%',
      // position: 'relative',
      // left: '13%',
    }
  }));

//   const audioPlayer = useSelector(selectAudioPlayerState).value;
//   const tracks = useSelector(selectTrackState).value;
//   const dispatch = useDispatch();

  
  // let player: HTMLAudioElement = document.getElementById('player') as HTMLAudioElement;

  // useEffect(() => {
  //     if (player === null){
  //         player = document.getElementById('player') as HTMLAudioElement;
  //     }
  // });

    const [progress, setProgress] = useState(0);
    const [durationInfo, setDurationInfo] = useState({currentTime: 0, duration: 0});
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const player = useRef<HTMLAudioElement>(null);

    const classes = useStyles();
    const audioUrl = '/api/test/track';
    const localPlayer = 
    <audio 
      ref={player}
      id="player" 
      // controls 
      src={audioUrl} 
      onTimeUpdate={handleOnTimeUpdate}
      onLoadedMetadata={handleOnLoadMetaData}
    />;

    function handleOnTimeUpdate(event){
      setTime(event);
    }

    function handleOnLoadMetaData(event){
      setVolume(player.current.volume)
      setTime(event);
    }

    function setTime(event){
        const target = event.currentTarget;
        setProgress(translateCurrentTimeToProgressBarValue(target.currentTime, target.duration));
        setDurationInfo({
          currentTime: Math.round(target.currentTime), 
          duration: Math.round(target.duration)
        });
    }

    const maxBarValue = 100;

    function handleOnClickProgressBar(percentage: number){
        const progressBarValue = percentage  * maxBarValue;
        const playerValue = percentage * player.current.duration;
        setProgress(progressBarValue);
        player.current.currentTime = playerValue;
    }

    function translateCurrentTimeToProgressBarValue(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * maxBarValue;
        return progressBarValue;
    }

    function handleOnClickPlayPauseButton(){
        if (isPlaying) {
            player.current.pause();
        } else {
            player.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    function handleOnVolumeChange(volume: number){
      setVolume(volume);
      player.current.volume = volume;
    }

  return (

    <div className={classes.audioPlayerContainer}>
      {localPlayer === null ? "Loading" : localPlayer}
      <div className={classes.progressBarContainer}>
        <ProgressBar progress={progress} onClick={handleOnClickProgressBar}/>
      </div>
      <div className={classes.audioPlayerItems}>
        <Grid
        container 
        spacing={0} 
        style={{
          // textAlign: "center", 
          // backgroundColor: 'red', 
          height: '100%'
        }}
        alignItems="center"
        justify="center"
        >

          <Grid item xs={4} 
          style={{backgroundColor: 'lightblue'}}
          >

            <Grid container spacing={0} >
              <Grid item xs={8}>
                <TrackInfo/>
              </Grid>
              <Grid item xs={4}>
                <Duration durationInfo={durationInfo}/>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={4}
          style={{backgroundColor: 'aqua'}}
          >
            <Grid 
            container 
            spacing={0} 
            alignItems="center"
            justify="center"
            style={{
              textAlign: "center", 
            }}
            >
              <Grid item xs={3} 
              className={classes.item}
              >
                <RepeatIcon color='disabled'></RepeatIcon>
              </Grid>
              <Grid item xs={2} className={classes.item}>
                <FastRewindIcon color='disabled'></FastRewindIcon>
              </Grid>
              <Grid item xs={2} className={classes.item}>
                <PlayPauseButton 
                isPlaying={isPlaying}
                onClick={handleOnClickPlayPauseButton}
                />
              </Grid>
              <Grid item xs={2} className={classes.item}>
                <FastForwardIcon color='disabled'></FastForwardIcon>
              </Grid>
              <Grid item xs={3} className={classes.item}>
            <ShuffleIcon color='disabled'></ShuffleIcon>
              </Grid>
            </Grid>

          </Grid>

          <Grid item xs={4} 
          style={{backgroundColor: 'yellow'}}
          >
            <Grid
            container 
            spacing={0} 
            style={{
              textAlign: "center", 
            }}  
            >
              <Grid item xs={6}>
                <Volume 
                currentVolume={volume * 100}
                onVolumeChange={handleOnVolumeChange}
                />
              </Grid>
              <Grid item xs={6}>
                <ShuffleIcon color='disabled'></ShuffleIcon>
                <ShuffleIcon color='disabled'></ShuffleIcon>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item xs={2}
          // style={{backgroundColor: 'red'}}
          >
            <TrackInfo/>
          </Grid>
          <Grid item xs={1}
          // style={{backgroundColor: 'yellow'}}
          >
            <Duration durationInfo={durationInfo}/>
          </Grid>
          <Grid item xs={1}>
            <RepeatIcon color='disabled'></RepeatIcon>
          </Grid>
          <Grid item xs={1}>
            <FastRewindIcon color='disabled'></FastRewindIcon>
          </Grid>
          <Grid item xs={1} >
            <PlayPauseButton 
            isPlaying={isPlaying}
            onClick={handleOnClickPlayPauseButton}
            />
          </Grid>
          <Grid item xs={1}>
            <FastForwardIcon color='disabled'></FastForwardIcon>
          </Grid>
          <Grid item xs={1}>
            <ShuffleIcon color='disabled'></ShuffleIcon>
          </Grid>
          <Grid item xs={2}>
            <VolumeUpIcon color='disabled'></VolumeUpIcon>
          </Grid>
          <Grid item xs={1}>
            <ShuffleIcon color='disabled'></ShuffleIcon>
          </Grid>
          <Grid item xs={1}>
            <ShuffleIcon color='disabled'></ShuffleIcon>
          </Grid> */}


        </Grid>
      </div>
    </div>

  );
}

export default Player;
