import { LinearProgress, withStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrackState } from "../../slices/trackSlice";
import { setDuration, setCurrentTime, selectAudioPlayerState } from '../../slices/playerSlice';

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

export default function ProgressBar(props){
    const { progress, onClick } = props;
    const maxBarValue = 100;
    const audioPlayer = useSelector(selectAudioPlayerState);
    const dispatch = useDispatch();

    // Determining click position on progress bar
    // https://stackoverflow.com/questions/28311631/determine-click-position-on-progress-bar
    function onClickProgressBar(e){
        const clickX = e.pageX;
        const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
        const percentage = (clickX / barWidth);
        const progressBarValue = percentage  * maxBarValue;
        const playerValue = percentage * 248;
        onClick(percentage);
        // dispatch(setCurrentTime(playerValue));
    }

    function updateProgressBar(currentTime: number, duration: number){
        const percentage = currentTime / duration;
        const progressBarValue = percentage * maxBarValue;
        onClick(progressBarValue, 0);
    }

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
        <LinearProgressEx
            variant="determinate"
            style={{height: '1vh'}}
            value={progress}
            onClick={onClickProgressBar}
            // onDrag={onClickProgressBar}
        />
    );
}