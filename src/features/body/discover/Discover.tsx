import { Grid, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import MostWatched from './MostWatched';

function Discover(){
    const tracks = useSelector(selectTrackState);

    const view = tracks.value.map(track => {
        return <p>{track.author}</p>
    })    

    return(
        <div className="discover">
            <MostWatched/>
        </div>
    );
}

export default Discover;