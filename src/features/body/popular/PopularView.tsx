import './PopularView.scss'
import React from 'react';
import Popular from './Popular';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';

function PopularView(){

    const tracks = useSelector(selectTrackState).value;

    const MAX_POPULARS = 3;
    const randomNumber = Math.abs(Math.floor(Math.random() * tracks.length - MAX_POPULARS));
    const populars = tracks.slice(randomNumber, randomNumber + MAX_POPULARS).map(track => {
        return <Popular key={track.id} track={track}/>;
    });
    
    return(
        <React.Fragment>
            <h2>Popular Artists</h2>
            <div className="popular-container">
                {populars}
            </div>
        </React.Fragment>    
    );

}

export default PopularView;