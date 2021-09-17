import { withStyles } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";

const PlayCircleFilledIconEx = withStyles(theme => ({
    root: {
        // backgroundColor: '#ffcb19',
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '6vh',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // position: 'absolute',
    },
    // colorPrimary: {
    //     color: '#ffcb19',
    // },
}))(PlayCircleFilledIcon);

const PauseCircleFilledIconEx = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '6vh',
        // backgroundColor: 'red',
    },
}))(PauseCircleFilledIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface PlayPauseButtonProps {
    isPlaying: boolean;
    onClick: OnMouseClick;
}
export default function PlayPauseButton(props: PlayPauseButtonProps){
    const { isPlaying, onClick } = props;

    const playButton = 
        <PlayCircleFilledIconEx
            data-testid="play"
            onClick={onClick}
        />

    const pauseButton = 
        <PauseCircleFilledIconEx
            data-testid="pause"
            onClick={onClick}
        />

    const viewButton = isPlaying ? pauseButton : playButton;

    return (
        <React.Fragment>
            {viewButton}
        </React.Fragment>
    );
}