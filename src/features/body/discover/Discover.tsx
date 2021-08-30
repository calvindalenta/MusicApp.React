import { Grid, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import BrowseAll from './BrowseAll';
import MostWatched from './MostWatched';

function Discover(){
    const tracks = useSelector(selectTrackState);

    const view = tracks.value.map(track => {
        return <p>{track.author}</p>
    })    

    return(
        <div className="discover">
            <Grid
            container
            spacing={1}
            style={{backgroundColor: 'lightgreen'}}
            >
                <Grid item xs={12}>
                    <MostWatched/>
                </Grid>
                <Grid item xs={12}>
                    <BrowseAll/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Discover;