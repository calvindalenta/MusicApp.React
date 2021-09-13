import './Footer.scss';
import React, { SyntheticEvent, useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../slices/trackSlice';
import { selectAudioPlayerState } from '../../slices/playerSlice';
import TrackInfo from './TrackInfo';
import Duration from './Duration';
import PlayPauseButton from './PlayPauseButton';
import Volume from './Volume';
import ProgressBar from './ProgressBar';
import { duration } from '@material-ui/core';

export default function Footer(){

    const audioPlayerState = useSelector(selectAudioPlayerState).value;

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [progress, setProgress] = useState(0);
    const [durationInfo, setDurationInfo] = useState({currentTime: 0, duration: 0});

    const audioPlayerRef = useRef<HTMLAudioElement>(null);
    const localPlayer = 
    <audio 
    style={{position: 'fixed', top: 0,}}
      ref={audioPlayerRef}
      id="player" 
      controls 
      src={"/api/test/track"}
      onPlay={() => {
          audioPlayerRef.current.volume = volume
      }}
      onTimeUpdate={handleOnTimeUpdate}
      onLoadedMetadata={handleOnLoadMetaData}
      onEnded={handleOnEnded}
    />;

    function translateCurrentTimeToProgressBarValue(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * MAX_PROGRESSBAR_VALUE;
        return progressBarValue;
    }

    function setTime(event: any){
        const target = event.currentTarget;
        setDurationInfo(value => ({
            currentTime: Math.round(target.currentTime),
            duration: Math.round(target.duration),
        }));
        setProgress(translateCurrentTimeToProgressBarValue(target.currentTime, target.duration));
    }

    function handleOnTimeUpdate(event: SyntheticEvent<HTMLAudioElement, Event>){
        setTime(event);
    }

    function handleOnLoadMetaData(event: SyntheticEvent<HTMLAudioElement, Event>){
        setTime(event);
    }

    function handleOnEnded(event: SyntheticEvent<HTMLAudioElement, Event>){
        setIsPlaying(false);
        audioPlayerRef.current.currentTime = 0;
        setProgress(0);
    }

    function handleOnClickPlayPauseButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        if (isPlaying) {
            audioPlayerRef.current.pause();
        } else {
            audioPlayerRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    function handleOnVolumeChange(event: React.ChangeEvent<{}>, value: number | number[]){
        if (typeof(value) !== 'number') return;

        setVolume(value);
        audioPlayerRef.current.volume = value;
    }

    const MAX_PROGRESSBAR_VALUE = 100;
    function handleOnProgressBarChange(event: React.ChangeEvent<{}>, value: number | number[]){
        if (typeof(value) !== 'number') return;
        
        const percentage = value / MAX_PROGRESSBAR_VALUE;
        audioPlayerRef.current.currentTime = percentage * audioPlayerRef.current.duration;
        setProgress(value);
    }

    return (
        <React.Fragment>
            {localPlayer}
            {/* <div id="progress-bar"></div> */}
            <ProgressBar progress={progress} onChange={handleOnProgressBarChange}/>
            <footer>
                <div className="player-left">
                    <TrackInfo track={audioPlayerState.currentTrack}/>
                    <Duration currentTime={durationInfo.currentTime} duration={durationInfo.duration}/>
                </div>
                <div className="player-middle">
                    <i className="fas fa-redo fa-2x"></i>
                    <i className="fas fa-backward fa-2x"></i>
                    {/* <i className="fas fa-play-circle fa-3x"></i> */}
                    <PlayPauseButton isPlaying={isPlaying} onClick={handleOnClickPlayPauseButton}/>
                    <i className="fas fa-forward fa-2x"></i>
                    <i className="fas fa-random fa-2x"></i>
                </div>
                <div className="player-right">
                    <div className="volume-control">
                        {/* <i className="fas fa-volume-down fa-2x"></i>
                        <input type="range" min="1" max="100" value="30" id="volume-slider"/> */}
                        <Volume currentVolume={volume} onVolumeChange={handleOnVolumeChange}/>
                    </div>
                    <div className="user-control">
                        <i className="fas fa-heart fa-2x"></i>
                        <i className="fas fa-plus fa-2x"></i>
                        <i className="fas fa-download fa-2x"></i>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}