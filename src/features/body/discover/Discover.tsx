import { Grid, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import BrowseAll from './BrowseAll';
import MostWatched from './MostWatched';
import Trending from './Trending';

function Discover(){
    const tracks = useSelector(selectTrackState);

    const view = tracks.value.map(track => {
        return <p>{track.author}</p>
    });

    function getView(){
        if (tracks.value.length === 0){
            // return loading
            return <p>Loading...</p>;
        } else {
            const result =
            <Grid
            container
            spacing={1}
            style={{backgroundColor: 'lightgreen'}}
            >
                <Grid item xs={12} style={{marginBottom: '3vh'}}>
                    <Trending/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: '3vh'}}>
                    <MostWatched/>
                </Grid>
                <Grid item xs={12} style={{marginBottom: '3vh'}}>
                    <BrowseAll/>
                </Grid>
            </Grid>
            return result;

        }
    }

    return(
        <div className="discover">
            {getView()}
        </div>
    );
}

export default Discover;