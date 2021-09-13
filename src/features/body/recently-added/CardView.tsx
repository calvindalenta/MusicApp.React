import './CardView.scss'
import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../../slices/trackSlice';
import Api from '../../../api/api';

function CardView(){
    
    const tracks = useSelector(selectTrackState).value;

    const MAX_CARD = 3;

    const cards = tracks.reduce((prev, curr, index) => {
        if (index >= MAX_CARD) return prev;

        const card = 
        <Card 
            key={curr.id}
            src={curr.imageUrl} 
            title={curr.title} 
            author={curr.author}
        />;

        prev.push(card)
        return prev;
    }, new Array<JSX.Element>());

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