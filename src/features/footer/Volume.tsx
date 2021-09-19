import { Slider, withStyles } from "@material-ui/core";
import React from "react";
import { OnVolumeChange } from '../../types/events';

const VolumeSlider = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        height: 0,
        // width: '10%',
        marginTop: '-0.3vh',
    },
    thumb: {
        height: '1vh',
        width: '1vh',
        backgroundColor: '#ffcb19',
        marginTop: '-0.3vh',
        marginLeft: '0vh',
        // '&:focus, &:hover, &$active': {
        //     boxShadow: 'inherit',
        // },
    },
    // active: {},
    // valueLabel: {
    //     left: 'calc(-50% + 4px)',
    // },
    track: {
        height: '0.5vh',
    },
    rail: {
        height: '0.5vh',
    },
}))(Slider);


export interface VolumeProps {
    currentVolume: number;
    onVolumeChange: OnVolumeChange;
}

export default function Volume(props: VolumeProps){
    const { currentVolume, onVolumeChange } = props;

    return (
        <React.Fragment>
            <i className="fas fa-volume-down fa-2x volume-icon"></i>

            {/* <VolumeUpIcon color='disabled' className="volume-icon"/> */}
            <VolumeSlider
            className="volume-slider"
            value={currentVolume}
            onChange={onVolumeChange}
            min={0}
            max={1}
            step={0.01}
            data-testid="volume"
            />
        </React.Fragment>
    );
}