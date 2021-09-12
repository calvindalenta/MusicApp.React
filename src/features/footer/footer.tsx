import './Footer.scss';
import React from "react";

export default function Footer(){

    return (
        <React.Fragment>
            <div id="progress-bar"></div>
            <footer>
                <div className="player-left">
                    <img src="images/giya-kancheli-small.jpg" alt="Giya Kancheli"/>
                    <div className="player-left-text">
                        <p className="author">Giya Kancheli - Yellow Leaves</p>
                        <p className="description">Levani Qotolashvili</p>
                    </div>
                    <p className="timestamp">
                        1:53 - 3:08
                    </p>
                </div>
                <div className="player-middle">
                    <i className="fas fa-redo fa-2x"></i>
                    <i className="fas fa-backward fa-2x"></i>
                    <i className="fas fa-play-circle fa-3x"></i>
                    <i className="fas fa-forward fa-2x"></i>
                    <i className="fas fa-random fa-2x"></i>
                </div>
                <div className="player-right">
                    <div className="volume-control">
                        <i className="fas fa-volume-down fa-2x"></i>
                        <input type="range" min="1" max="100" value="30" id="volume-slider"/>
                    </div>
                    <div className="user-control">
                        <i className="fas fa-heart fa-2x"></i>
                        <i className="fas fa-plus fa-2x"></i>
                        <i className="fas fa-download fa-2x"></i>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}