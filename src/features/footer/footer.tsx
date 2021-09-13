import './Footer.scss';
import React, { useRef, useState } from "react";
import { useSelector } from 'react-redux';
import { selectTrackState } from '../../slices/trackSlice';
import { selectAudioPlayerState } from '../../slices/playerSlice';
import TrackInfo from './TrackInfo';
import Duration from './Duration';
export default function Footer(){

    const audioPlayerState = useSelector(selectAudioPlayerState).value;

    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);

    const audioPlayerRef = useRef(null);
    const localPlayer = 
    <audio 
      ref={audioPlayerRef}
      id="player" 
      controls 
      src={"/api/test/track"} 
      onTimeUpdate={handleOnTimeUpdate}
      onLoadedMetadata={handleOnLoadMetaData}
      onEnded={handleOnEnded}
    />;

    function handleOnTimeUpdate(event){
    //   setTime(event);
    }

    function handleOnLoadMetaData(event){
    //   setVolume(player.current.volume)
    //   setTime(event);
    }

    function handleOnEnded(event){
    //   setIsPlaying(false);
    //   player.current.currentTime = 0;
    }

    return (
        <React.Fragment>
            {localPlayer}
            <div id="progress-bar"></div>
            <footer>
                <div className="player-left">
                    <TrackInfo track={audioPlayerState.currentTrack}/>
                    <Duration currentTime={60} duration={90}/>
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