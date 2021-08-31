import { Button, LinearProgress, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import { setDuration, setCurrentTime, selectAudioPlayerState } from '../../slices/playerSlice';

export default function PlayPauseButton(props){
    const { isPlaying, onClick } = props;

    return (
        <Button
            style={{backgroundColor: isPlaying ? "blue" : "red"}}
            onClick={onClick}
        >
            Click ME!
        </Button>
    );
}