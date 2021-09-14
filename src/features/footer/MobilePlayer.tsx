import { Dialog, DialogTitle } from "@material-ui/core";
import React from "react";
import { Track } from '../../slices/trackSlice';
import PlayPauseButton from './PlayPauseButton';

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

export default function MobilePlayer(props: MobilePlayerProps) {

    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.open}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <PlayPauseButton isPlaying={props.isPlaying} onClick={props.handleOnClickPlayPauseButton}/>
        </Dialog>
    );
}
