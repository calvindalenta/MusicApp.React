import './MobilePlayer.scss';

import React from "react";

import { Dialog, withStyles } from "@material-ui/core";

import { Track } from '../../slices/trackSlice';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import RepeatButton from './RepeatButton';
import ShuffleButton from './ShuffleButton';
import FavoriteButton from './FavoriteButton';
import MobileProgressBar from './MobileProgressBar';
import RewindButton from './RewindButton';
import ForwardButton from './ForwardButton';
import MobilePlayPauseButton from './MobilePlayPauseButton';
import Duration from './Duration';

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
type OnChangeProgressBar = (event: React.ChangeEvent<{}>, value: number | number[]) => void;

export interface MobilePlayerProps {
    open: boolean;
    selectedTrack: Track;
    onClose: () => void;

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

const DialogEx = withStyles(theme => ({
    root: {
    },
    paper: {
        backgroundColor: 'white',
    },
}))(Dialog);

export default function MobilePlayer(props: MobilePlayerProps) {

    const track = props.currentTrack;

    const handleClose = () => {
        props.onClose();
    };

    const title = track !== null ? track.title : 'No Title';

    const author = track !== null ? track.author : 'No Title';;

    const imageSource = track !== null ? track.imageUrl : '';
    
    return (
        <DialogEx 
        fullScreen 
        onClose={handleClose} 
        aria-labelledby="simple-dialog-title" 
        open={props.open}>
            <div className="dialog-container">
                <div className="dialog-header">
                    <ArrowBackIosIcon onClick={handleClose} fontSize="large"/>
                    <MoreVertIcon onClick={() => {}} fontSize="large"/>
                </div>
                <div className="dialog-image">
                    <img src={imageSource} alt={title + ' - ' + author} />
                </div>
                <div className="dialog-info">
                    <div className="dialog-title">
                        <p>{title}</p>
                    </div>
                    <div className="dialog-author">
                        <p>{author}</p>
                    </div>
                </div>
                <div className="dialog-control">
                    <RepeatButton onClick={props.handleOnClickRepeatButton}/>
                    <FavoriteButton onClick={props.handleOnClickFavoriteButton} active={props.favorite}/>
                    <ShuffleButton onClick={props.handleOnClickShuffleButton}/>
                    {/* <ArrowBackIosIcon className="control-item" onClick={handleClose} fontSize="large"/>
                    <ArrowBackIosIcon className="control-item" onClick={handleClose} fontSize="large"/>
                    <ArrowBackIosIcon className="control-item" onClick={handleClose} fontSize="large"/> */}
                </div>
                <div className="dialog-progress">
                    <MobileProgressBar progress={props.progress} onChange={props.handleOnProgressBarChange}/>
                </div>
                <div className="dialog-duration">
                    <Duration currentTime={props.durationInfo.currentTime} duration={props.durationInfo.duration}>
                        {(currentTime, duration) => {
                            return (
                                <>
                                    <p>{currentTime}</p>
                                    <p>{duration}</p>
                                </>
                            );
                        }}
                    </Duration>
                </div>
                <div className="dialog-footer">
                    <RewindButton onClick={props.handleOnClickRewindButton}/>
                    <MobilePlayPauseButton isPlaying={props.isPlaying} onClick={props.handleOnClickPlayPauseButton}/>
                    <ForwardButton onClick={props.handleOnClickForwardButton}/>
                </div>
            </div>

        </DialogEx>
    );
}
