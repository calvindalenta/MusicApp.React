import { withStyles } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import React from "react";

const PlayCircleFilledIconEx = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '10vh',
        margin: '0px 2vh 2vh 2vh',
    },
}))(PlayCircleFilledIcon);

const PauseCircleFilledIconEx = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        cursor: 'pointer',
        fontSize: '10vh',
        margin: '0px 2vh 2vh 2vh',
    },
}))(PauseCircleFilledIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface PlayPauseButtonProps {
    isPlaying: boolean;
    onClick: OnMouseClick;
}

export default function MobilePlayPauseButton(props: PlayPauseButtonProps){
    const { isPlaying, onClick } = props;

    const playButton = 
        <PlayCircleFilledIconEx
            onClick={onClick}
        />

    const pauseButton = 
        <PauseCircleFilledIconEx
            onClick={onClick}
        />

    const viewButton = isPlaying ? pauseButton : playButton;

    return (
        <React.Fragment>
            {viewButton}
        </React.Fragment>
    );
}