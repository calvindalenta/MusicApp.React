import { Grid, LinearProgress, makeStyles, Paper, TextField, withStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAudioPlayerState, setDuration, setCurrentTime} from '../../slices/playerSlice';
import { selectTrackState } from '../../slices/trackSlice';
import PlayPauseButton from './PlayPauseButton';
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

//   const audioPlayer = useSelector(selectAudioPlayerState).value;
//   const tracks = useSelector(selectTrackState).value;
//   const dispatch = useDispatch();

  const classes = useStyles();

  const audioUrl = '/api/test/track';
  const localPlayer = 
  <audio 
    id="player" 
    controls 
    src={audioUrl} 
    onTimeUpdate={handleOnTimeUpdate}
  />;
  
  let player: HTMLAudioElement = document.getElementById('player') as HTMLAudioElement;

  useEffect(() => {
      if (player === null){
          player = document.getElementById('player') as HTMLAudioElement;
      }
  });

    const [progress, setProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    function handleOnTimeUpdate(event){
        const target = event.currentTarget;
        setProgress(translateCurrentTime(target.currentTime, target.duration));
    }

    const maxBarValue = 100;

    function handleOnClickProgressBar(percentage: number){
        const progressBarValue = percentage  * maxBarValue;
        const playerValue = percentage * player.duration;
        setProgress(progressBarValue);
        player.currentTime = playerValue;
    }

    function translateCurrentTime(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * maxBarValue;
        return progressBarValue;
    }

    function handleOnClickPlayPauseButton(){
        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
        setIsPlaying(!isPlaying);
    }

  return (
    <div className={classes.audioPlayerContainer}>
        <PlayPauseButton isPlaying={isPlaying} onClick={handleOnClickPlayPauseButton}/>
        {localPlayer === null ? "Loading" : localPlayer}
        <ProgressBar progress={progress} onClick={handleOnClickProgressBar}/>
    </div>
  );
}

export default Player;
