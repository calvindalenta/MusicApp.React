import { Avatar, Button, Grid, LinearProgress, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState, Track } from "../../slices/trackSlice";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";
import { selectAudioPlayerState } from "../../slices/playerSlice";
import Api from '../../api/api';

export interface TrackInfoProps {
    track: Track;
}

export default function TrackInfo(props: TrackInfoProps){

    const track = props.track;

    const title = track !== null ? track.title : 'No Title';

    const author = track !== null ? track.author : 'No Title';;

    const imageSource = track !== null ? track.imageUrl : '';

    return (
        <React.Fragment>
            <img src={imageSource} alt={author}/>
            <div className="player-left-text">
                <p className="author">{title}</p>
                <p className="description">{author}</p>
            </div>
        </React.Fragment>
    );
}