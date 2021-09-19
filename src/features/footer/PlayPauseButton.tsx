import React from "react";
import { OnMouseClick } from '../../types/events';


export interface PlayPauseButtonProps {
    isPlaying: boolean;
    onClick: OnMouseClick;
    PlayButton: React.ComponentType<any>; 
    PauseButton: React.ComponentType<any>; 
}

export default function PlayPauseButton(props: PlayPauseButtonProps){
    const { isPlaying, onClick, PlayButton, PauseButton } = props;

    const playButton = 
        <PlayButton
            data-testid="play"
            onClick={onClick}
        />

    const pauseButton = 
        <PauseButton
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