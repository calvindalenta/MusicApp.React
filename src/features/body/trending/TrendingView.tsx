import './TrendingView.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import Trending from './Trending';

function TrendingView(){

    const tracks = useSelector(selectTrackState).value;

    const MAX_TRENDINGS = 3;
    const randomNumber = Math.abs(Math.floor(Math.random() * tracks.length - MAX_TRENDINGS));
    const trendings = tracks.slice(randomNumber, randomNumber + MAX_TRENDINGS).map(track => {
        return <Trending key={track.id} track={track}/>;
    });

    return(
        <React.Fragment>
            <h2>Now Trending</h2>
            <div className="trending-container">
                {trendings}
            </div>
        </React.Fragment>      
    );

}

export default TrendingView;