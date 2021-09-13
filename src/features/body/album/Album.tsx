import './Album.scss'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';

function Album(){

    const tracks = useSelector(selectTrackState).value;
    const track = tracks[tracks.length - 1];

    return(
        <React.Fragment>
            <h2>Album</h2>
            <div className="album-container">
                <img src={track.imageUrl} alt={track.author}/>
                <div className="album-text">
                    <h2 className="album-author">{track.author}</h2>
                    <p className="album-description">Three Pieces from Songbook, Andrius Zlabys, piano</p>
                </div>
            </div>
        </React.Fragment>   
    );
}

export default Album;