import { Button, LinearProgress, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import { setDuration, setCurrentTime, selectAudioPlayerState } from '../../slices/playerSlice';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";

const PlayCircleFilledIconEx = withStyles(theme => ({
    root: {
        // backgroundColor: '#ffcb19',
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '6vh',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // position: 'absolute',
    },
    // colorPrimary: {
    //     color: '#ffcb19',
    // },
}))(PlayCircleFilledIcon);

const PauseCircleFilledIconEx = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '6vh',
        // backgroundColor: 'red',
    },
}))(PauseCircleFilledIcon);


export default function PlayPauseButton(props){
    const { isPlaying, onClick } = props;

    const playButton = 
        <PlayCircleFilledIconEx
            onClick={onClick}
        />

    const pauseButton = 
        <PauseCircleFilledIconEx
            onClick={onClick}
        />

    const viewButton = isPlaying ? pauseButton : playButton;

    return (
        <React.Fragment>
            {viewButton}
        </React.Fragment>
    );
}