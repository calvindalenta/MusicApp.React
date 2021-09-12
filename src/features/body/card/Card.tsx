import './Card.scss'
import React from 'react';

function Card(){
    
    return(
        <React.Fragment>
            <h2>Recently Added</h2>
            <div className="card-container">
                <div className="card">
                    <div className="card-image">
                        <img src="images/alan-walker.jpg" alt="Alan Walker - On My Way"/>
                    </div>
                    <div className="card-footer">
                        <div className="card-text">
                            <p className="track-title">On My Way</p>
                            <p className="track-author">Alan Walker</p>
                        </div>
                        <div className="card-control">
                            <i className="fas fa-ellipsis-v fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="images/marshmello.jpg" alt="Marshmello - One Thing Right"/>
                    </div>
                    <div className="card-footer">
                        <div className="card-text">
                            <p className="track-title">One Thing Right</p>
                            <p className="track-author">Marshmello</p>
                        </div>
                        <div className="card-control">
                            <i className="fas fa-ellipsis-v fa-2x"></i>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="images/thechainsmokers.jpg" alt="The Chainsmokers - Takeaway"/>
                    </div>
                    <div className="card-footer">
                        <div className="card-text">
                            <p className="track-title">Takeaway</p>
                            <p className="track-author">The Chainsmokers</p>
                        </div>
                        <div className="card-control">
                            <i className="fas fa-ellipsis-v fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>    
    );

}

export default Card;