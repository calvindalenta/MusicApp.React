import { Avatar, Button, Grid, LinearProgress, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import React from "react";

export interface DurationProps {
    currentTime: number;
    duration: number;
}

export default function Duration(props: DurationProps){

    // Convert seconds to minutes
    // https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    function fmtMSS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

    const currentTime = Number.isNaN(props.currentTime) ? 0 : fmtMSS(props.currentTime);
    const duration = Number.isNaN(props.duration) ? 0 : fmtMSS(props.duration);
    
    return (
        <p className="timestamp">
            {currentTime} - {duration}
        </p>   
    );
}