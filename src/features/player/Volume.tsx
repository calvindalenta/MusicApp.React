import { Avatar, Button, Grid, LinearProgress, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import { setDuration, setCurrentTime, selectAudioPlayerState } from '../../slices/playerSlice';
import React from "react";
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const LinearProgressEx = withStyles(theme => ({
    colorPrimary: {
        backgroundColor: "#f5f5f6",
    },
    barColorPrimary: {
        backgroundColor: "#ffcb19",
    },
    bar: {
        transition: 'none',
    },
    root: {
        cursor: 'pointer',
    }
}))(LinearProgress);


export default function Volume(props){
    const { currentVolume, onVolumeChange } = props;
    const maxVolume = 1;

    function onClickProgressBar(e){
        const clickX = e.pageX;
        const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
        const percentage = (clickX / barWidth);
        // const volume = percentage * maxVolume;
        onVolumeChange(0.7);
        // dispatch(setCurrentTime(playerValue));
    }

    return (
        <React.Fragment>
            <Grid
            container
            alignItems="center"
            justify="center"
            >
                <Grid item xs={2}>
                    <VolumeUpIcon color='disabled'/>
                </Grid>
                <Grid item xs={10}>
                    <LinearProgressEx
                    variant="determinate"
                    style={{height: '0.5vh', width: '50%'}}
                    value={currentVolume}
                    onClick={onClickProgressBar}
                    />
                </Grid>
            </Grid>

        </React.Fragment>
    );
}