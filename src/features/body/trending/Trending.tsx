import './Trending.scss'
import React from 'react';

function Trending(){

    return(
        <React.Fragment>
            <h2>Now Trending</h2>
            <div className="trending-container">
                <div className="trending-box">
                    <i className="fas fa-play-circle fa-3x"></i>
                    <div className="trending-text">
                        <p className="trending-title">On My Way</p>
                        <p className="trending-author">Alan Walker</p>
                    </div>
                    <p className="trending-duration">
                        03:37
                    </p>
                </div>
                <div className="trending-box">
                    <i className="fas fa-play-circle fa-3x"></i>
                    <div className="trending-text">
                        <p className="trending-title">South of the Border</p>
                        <p className="trending-author">Ed Sheeran</p>
                    </div>
                    <p className="trending-duration">
                        03:37
                    </p>
                </div>
                <div className="trending-box">
                    <i className="fas fa-play-circle fa-3x"></i>
                    <div className="trending-text">
                        <p className="trending-title">One Thing Right</p>
                        <p className="trending-author">Marshmello</p>
                    </div>
                    <p className="trending-duration">
                        03:37
                    </p>
                </div>
            </div>
        </React.Fragment>      
    );

}

export default Trending;