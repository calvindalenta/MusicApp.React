import { Avatar, Button, Grid, LinearProgress, ThemeProvider, Typography, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import { setDuration, setCurrentTime, selectAudioPlayerState } from '../../slices/playerSlice';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";

export default function TrackInfo(props){

    const avatar = null;

    const title = null;

    const author = null;

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Avatar 
                    alt='guest'
                    variant='rounded'
                    />
                </Grid>
                <Grid 
                item 
                xs={8}
                style={{ wordWrap: 'break-word', overflow: 'hidden' }}
                >
                    <Typography variant="subtitle2" noWrap>
                        Don't You Know It's True Don't You Know It's TrueDon't You Know It's TrueDon't You Know It's TrueDon't You Know It's True
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" noWrap>
                        Michael Ramir C.
                    </Typography>   
                </Grid>
            </Grid>

        </React.Fragment>
    );
}