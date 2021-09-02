import { Avatar, Button, Grid, LinearProgress, Slider, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
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

const VolumeSlider = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        height: 0,
        width: '50%',
    },
    thumb: {
        height: '1vh',
        width: '1vh',
        backgroundColor: '#ffcb19',
        marginTop: '-0.3vh',
        marginLeft: '0vh',
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: '0.5vh',
    },
    rail: {
        height: '0.5vh',
    },
}))(Slider);


export default function Volume(props){
    const { currentVolume, onVolumeChange } = props;
    // const maxVolume = 1;

    // function onClickProgressBar(e){
    //     const clickX = e.pageX;
    //     const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
    //     const percentage = (clickX / barWidth);
    //     // const volume = percentage * maxVolume;
    //     onVolumeChange(0.7);
    //     // dispatch(setCurrentTime(playerValue));
    // }

    function handleChange(event: any, value: number | number[]){
        if (typeof(value) === 'number') onVolumeChange(value);
    }

    return (
        <React.Fragment>
            <VolumeUpIcon color='disabled'/>
            <VolumeSlider
            value={currentVolume}
            // onClick={onClickProgressBar}
            onChange={handleChange}
            min={0}
            max={1}
            step={0.01}
            />
            
            {/* <Grid
            container
            alignItems="center"
            justify="center"
            >
                <Grid item xs={2}>
                    <VolumeUpIcon color='disabled'/>
                </Grid>
                <Grid item xs={6}>
                    <LinearProgressEx
                    variant="determinate"
                    style={{height: '0.5vh', width: '50%'}}
                    value={currentVolume}
                    onClick={onClickProgressBar}
                    />
                    <VolumeSlider
                    value={currentVolume}
                    // onClick={onClickProgressBar}
                    onChange={handleChange}
                    min={0}
                    max={1}
                    step={0.01}
                    />
                </Grid>
            </Grid> */}

        </React.Fragment>
    );
}