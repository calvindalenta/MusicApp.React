import React from "react";

import TrackInfo from './TrackInfo';
import Duration from './Duration';
import PlayPauseButton from './PlayPauseButton';
import Volume from './Volume';
import ProgressBar from './ProgressBar';
import RewindButton from './RewindButton';
import ForwardButton from './ForwardButton';
import RepeatButton from './RepeatButton';
import ShuffleButton from './ShuffleButton';
import FavoriteButton from './FavoriteButton';
import { Track } from "../../slices/trackSlice";
import { makePlayPauseButton } from "../overrides/makePlayPauseButton";

type OnChangeProgressBar = (event: React.ChangeEvent<{}>, value: number | number[]) => void;
type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface DekstopPlayerProps {
    progress: number;
    handleOnProgressBarChange: OnChangeProgressBar;
    currentTrack: Track;
    durationInfo: {currentTime: number, duration: number};
    handleOnClickRepeatButton: OnMouseClick;
    handleOnClickRewindButton: OnMouseClick;
    isPlaying: boolean;
    handleOnClickPlayPauseButton: OnMouseClick;
    handleOnClickForwardButton: OnMouseClick;
    handleOnClickShuffleButton: OnMouseClick;
    volume: number;
    handleOnVolumeChange: OnChangeProgressBar;
    handleOnClickFavoriteButton: OnMouseClick;
    favorite: boolean;
}

export default function DesktopPlayer(props: DekstopPlayerProps){

    const { play, pause } = makePlayPauseButton({
        root: {
            color: '#ffcb19',
            cursor: 'pointer',
            fontSize: '6vh',
        },
    })

    return (
        <React.Fragment>
            <ProgressBar progress={props.progress} onChange={props.handleOnProgressBarChange}/>
            <div className="player-left">
                <TrackInfo track={props.currentTrack}/>
                <Duration currentTime={props.durationInfo.currentTime} duration={props.durationInfo.duration}>
                    {(currentTime, duration) => {
                        return (
                            <p className="timestamp" data-testid="duration">
                                {currentTime} - {duration}
                            </p>  
                        );
                    }}
                </Duration>
            </div>
            <div className="player-middle">
                {/* <i className="fas fa-redo fa-2x"></i> */}
                <RepeatButton onClick={props.handleOnClickRepeatButton}/>
                {/* <i className="fas fa-backward fa-2x"></i> */}
                <RewindButton onClick={props.handleOnClickRewindButton}/>
                {/* <i className="fas fa-play-circle fa-3x"></i> */}
                <PlayPauseButton PlayButton={play} PauseButton={pause} isPlaying={props.isPlaying} onClick={props.handleOnClickPlayPauseButton}/>
                {/* <i className="fas fa-forward fa-2x"></i> */}
                <ForwardButton onClick={props.handleOnClickForwardButton}/>
                {/* <i className="fas fa-random fa-2x"></i> */}
                <ShuffleButton onClick={props.handleOnClickShuffleButton}/>
            </div>
            <div className="player-right">
                <div className="volume-control">
                    {/* <i className="fas fa-volume-down fa-2x"></i>
                    <input type="range" min="1" max="100" value="30" id="volume-slider"/> */}
                    <Volume currentVolume={props.volume} onVolumeChange={props.handleOnVolumeChange}/>
                </div>
                <div className="user-control">
                    {/* <i className="fas fa-heart fa-2x"></i> */}
                    <FavoriteButton onClick={props.handleOnClickFavoriteButton} active={props.favorite}/>
                    <i className="fas fa-plus fa-2x"></i>
                    <i className="fas fa-download fa-2x"></i>
                </div>
            </div>
        </React.Fragment>
    );
}