import { LinearProgress, Slider, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";

// https://stackoverflow.com/questions/53892108/color-change-for-the-loading-bar-component-of-material-ui
const LinearProgressEx = withStyles(theme => ({
    colorPrimary: {
        backgroundColor: "#f5f5f6",
    },
    barColorPrimary: {
        backgroundColor: "#ffcb19",
    },
    bar: {
        transition: 'none',
    },
    root: {
        cursor: 'pointer',
    }
}))(LinearProgress);

const TrackSlider = withStyles(theme => ({
    root: {
        color: '#ffcb19',
        height: 0,
        zIndex: 1,
    },
    thumb: {
        height: '2vh',
        width: '2vh',
        backgroundColor: '#ffcb19',
        marginTop: '-0.5vh',
        marginLeft: '-1vh',
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: '1vh',
    },
    rail: {
        height: '1vh',
    },
}))(Slider);

export default function ProgressBar(props){
    const { progress, onClick } = props;
    const maxBarValue = 100;
    // const audioPlayer = useSelector(selectAudioPlayerState);
    // const dispatch = useDispatch();

    // Determining click position on progress bar
    // https://stackoverflow.com/questions/28311631/determine-click-position-on-progress-bar
    function onClickProgressBar(e){
        const clickX = e.pageX;
        const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
        const percentage = (clickX / barWidth);
        // const progressBarValue = percentage  * maxBarValue;
        // const playerValue = percentage * 248;
        onClick(percentage);
        // dispatch(setCurrentTime(playerValue));
    }

    function updateProgressBar(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * maxBarValue;
        onClick(progressBarValue, 0);
    }

    // function handleChange(event: any, value: number | number[]){
    //     onClick((value as number) / 100); // Casting :(
    // }

    // const [hooked, setHooked] = useState(false);

    // useEffect(() => {
    //     if (player !== null){
    //         if (!hooked){
    //             player.addEventListener("timeupdate", function() {
    //                 updateProgressBar(player.currentTime, player.duration)
    //             }, false);
    //             setHooked(true);
    //         }
    //     }
    // });



    return (
        // <LinearProgressEx
        //     variant="determinate"
        //     style={{height: '1vh', bottom: '0px'}}
        //     value={progress}
        //     onClick={onClickProgressBar}
        //     // onDrag={onClickProgressBar}
        // />
        // <Slider defaultValue={0} onClick={onClickProgressBar} />
        <TrackSlider
            // style={{bottom: '0px'}}
            value={progress}
            onClick={onClickProgressBar}
            // onChange={handleChange}
            // aria-label="current time"
            defaultValue={0}
        />
    );
}