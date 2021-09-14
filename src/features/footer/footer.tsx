import './Footer.scss';

import React, { SyntheticEvent, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { selectTrackState, Track } from '../../slices/trackSlice';
import { registerCallback, selectAudioPlayerState, setCurrentTrack } from '../../slices/playerSlice';

import DesktopPlayer from './DesktopPlayer';
import MobilePlayer from './MobilePlayer';


export default function Footer(){

    const trackState = useSelector(selectTrackState);
    const audioPlayerState = useSelector(selectAudioPlayerState).value;
    const dispatch = useDispatch();

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [progress, setProgress] = useState(0);
    const [durationInfo, setDurationInfo] = useState({currentTime: 0, duration: 0});

    // For FavouriteButton
    const [favorite, setFavorite] = useState(false);

    const audioPlayerRef = useRef<HTMLAudioElement>(null);
    const localPlayer = 
    <audio 
        // style={{position: 'fixed', top: 0,}}
        ref={audioPlayerRef}
        id="player" 
        // controls 
        onPlay={() => {
            audioPlayerRef.current.volume = volume
        }}
        onTimeUpdate={handleOnTimeUpdate}
        onLoadedMetadata={handleOnLoadMetaData}
        onEnded={handleOnEnded}
    />;

    // https://stackoverflow.com/questions/53214465/how-to-use-lifecycle-methods-with-hooks-in-react
    useEffect(() => {
        dispatch(registerCallback(handleOnChangeTrack));

        // if (trackState.status === 'succeeded') {
        //     const randomTrack = trackState.value[Math.round(Math.random() * trackState.value.length)];
        //     dispatch(setCurrentTrack(randomTrack));
        // }
    }, [dispatch, trackState]);

    function handleOnChangeTrack(track: Track){
        if (window.innerWidth <= 425) {
            setMobilePlayerOpen(true);
        }
        const currentPlayer = audioPlayerRef.current;
        currentPlayer.pause();
        setIsPlaying(false);
        currentPlayer.src = track.trackUrl;
        currentPlayer.load();
        // setIsPlaying(true);
        // currentPlayer.play();
    }

    function translateCurrentTimeToProgressBarValue(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * MAX_PROGRESSBAR_VALUE;
        return progressBarValue;
    }

    function setTime(event: SyntheticEvent<HTMLAudioElement, Event>){
        if (!audioPlayerState.currentTrack) return;
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
        if (!audioPlayerState.currentTrack) return;
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
        if (!audioPlayerState.currentTrack) return;
        if (typeof(value) !== 'number') return;
        
        const percentage = value / MAX_PROGRESSBAR_VALUE;
        audioPlayerRef.current.currentTime = percentage * audioPlayerRef.current.duration;
        setProgress(value);
    }

    function getRandomTrack(){
        const randomTrack = trackState.value[Math.round(Math.random() * trackState.value.length)];
        return randomTrack;
    }

    function handleOnClickRewindButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        dispatch(setCurrentTrack(getRandomTrack()));
    }

    function handleOnClickForwardButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        dispatch(setCurrentTrack(getRandomTrack()));
    }

    function handleOnClickShuffleButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        dispatch(setCurrentTrack(getRandomTrack()));
    }

    function handleOnClickRepeatButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        const currentPlayer = audioPlayerRef.current;
        currentPlayer.currentTime = 0;
    }

    function handleOnClickFavoriteButton(event: React.MouseEvent<SVGSVGElement, MouseEvent>){
        setFavorite(!favorite);
        console.log(favorite);
    }

    const [mobilePlayerOpen, setMobilePlayerOpen] = useState(false);
    function handleOnCloseMobilePlayer() {
        setMobilePlayerOpen(false);
        audioPlayerRef.current.pause();
    }

    return (
        <React.Fragment>
            {localPlayer}
            {/* <div id="progress-bar"></div> */}
            <footer>
                <div className="mobile-player">
                    <MobilePlayer
                    open={mobilePlayerOpen}
                    selectedTrack={audioPlayerState.currentTrack}
                    onClose={handleOnCloseMobilePlayer}
                    progress={progress}
                    handleOnProgressBarChange={handleOnProgressBarChange}
                    currentTrack={audioPlayerState.currentTrack}
                    durationInfo={durationInfo}
                    handleOnClickRepeatButton={handleOnClickRepeatButton}
                    handleOnClickRewindButton={handleOnClickRewindButton}
                    isPlaying={isPlaying}
                    handleOnClickPlayPauseButton={handleOnClickPlayPauseButton}
                    handleOnClickForwardButton={handleOnClickForwardButton}
                    handleOnClickShuffleButton={handleOnClickShuffleButton}
                    volume={volume}
                    handleOnVolumeChange={handleOnVolumeChange}
                    handleOnClickFavoriteButton={handleOnClickFavoriteButton}
                    favorite={favorite}
                    />
                </div>
                <div className="desktop-player">
                    <DesktopPlayer 
                    progress={progress}
                    handleOnProgressBarChange={handleOnProgressBarChange}
                    currentTrack={audioPlayerState.currentTrack}
                    durationInfo={durationInfo}
                    handleOnClickRepeatButton={handleOnClickRepeatButton}
                    handleOnClickRewindButton={handleOnClickRewindButton}
                    isPlaying={isPlaying}
                    handleOnClickPlayPauseButton={handleOnClickPlayPauseButton}
                    handleOnClickForwardButton={handleOnClickForwardButton}
                    handleOnClickShuffleButton={handleOnClickShuffleButton}
                    volume={volume}
                    handleOnVolumeChange={handleOnVolumeChange}
                    handleOnClickFavoriteButton={handleOnClickFavoriteButton}
                    favorite={favorite}
                    />
                </div>
            </footer>
        </React.Fragment>
    );
}