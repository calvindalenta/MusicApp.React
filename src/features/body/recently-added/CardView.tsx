import './CardView.scss'
import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import Api from '../../../api/api';

function CardView(){
    
    const tracks = useSelector(selectTrackState).value;

    const MAX_CARD = 3;
    const cards = tracks.map((track, index) => {
        if (index >= MAX_CARD) return;
        return <Card 
        key={track.id}
        src={Api.resolveImagePath(track.id)} 
        title={track.title} 
        author={track.author}
        />
    });

    return(
        <React.Fragment>
            <h2>Recently Added</h2>
            <div className="card-container">
                {cards}
            </div>
        </React.Fragment>    
    );

}

export default CardView;