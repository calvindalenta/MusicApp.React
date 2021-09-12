import './Album.scss'
import React from 'react';

function Album(){

    return(
        <React.Fragment>
            <h2>Albums</h2>
            <div className="album-container">
                <img src="images/giya-kancheli.jpg" alt="Giya Kancheli"/>
                <div className="album-text">
                    <h2 className="album-author">Giya Kancheli</h2>
                    <p className="album-description">Three Pieces from Songbook, Andrius Zlabys, piano</p>
                </div>
            </div>
        </React.Fragment>   
    );
}

export default Album;