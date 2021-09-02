import { Avatar, Button, Grid, LinearProgress, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";
import { selectAudioPlayerState } from "../../slices/playerSlice";

export default function TrackInfo(props){

    const avatar = null;

    const audioPlayerState = useSelector(selectAudioPlayerState).value;

    const title = audioPlayerState.currentTrack !== null ? audioPlayerState.currentTrack.title : 'No Title';

    const author = audioPlayerState.currentTrack !== null ? audioPlayerState.currentTrack.author : 'No Title';;

    const imageSource = audioPlayerState.currentTrack !== null ? 'api/image/' + audioPlayerState.currentTrack.id : '';

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar 
                    alt='guest'
                    variant='rounded'
                    src={imageSource}
                    />
                </Grid>
                <Grid 
                item 
                xs={8}
                style={{ wordWrap: 'break-word', overflow: 'hidden' }}
                >
                    <Typography variant="subtitle2" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" noWrap>
                        {author}
                    </Typography>   
                </Grid>
            </Grid>

        </React.Fragment>
    );
}