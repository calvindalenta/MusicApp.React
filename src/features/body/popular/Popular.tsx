import './Popular.scss'
import React from 'react';

function Popular(){
    
    return(
        <React.Fragment>
            <h2>Popular Artists</h2>
            <div className="popular-container">
                <div className="popular-box">
                    <img src="images/ed-sheeran-head.webp" alt="Ed Sheeran"/>
                    <div className="popular-text">
                        <p className="popular-author">Ed Sheeran</p>
                        <p className="popular-followers">2.3M Followers</p>
                    </div>
                    <i className="fas fa-ellipsis-h fa-2x"></i>
                </div>
                <div className="popular-box">
                    <img src="images/sam-smith-head.jpg" alt="Ed Sheeran"/>
                    <div className="popular-text">
                        <p className="popular-author">Sam Smith</p>
                        <p className="popular-followers">1.9M Followers</p>
                    </div>
                    <i className="fas fa-ellipsis-h fa-2x"></i>
                </div>
                <div className="popular-box">
                    <img src="images/drake-head.webp" alt="Ed Sheeran"/>
                    <div className="popular-text">
                        <p className="popular-author">Drake</p>
                        <p className="popular-followers">1.5M Followers</p>
                    </div>
                    <i className="fas fa-ellipsis-h fa-2x"></i>
                </div>
            </div>
        </React.Fragment>    
    );

}

export default Popular;