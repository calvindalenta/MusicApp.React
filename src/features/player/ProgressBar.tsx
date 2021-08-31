import { LinearProgress, withStyles } from "@material-ui/core";
import { useState } from "react";

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
}))(LinearProgress);

export default function ProgressBar(){
    const [progress, setProgress] = useState(50);
    const maxBarValue = 100;

    function setProgressValue(e){
        const clickX = e.pageX;
        const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
        const result = (clickX / barWidth) * maxBarValue;
        setProgress(result);
    }

    return (
        <LinearProgressEx
            variant="determinate"
            style={{height: '1vh'}}
            value={progress} onClick={setProgressValue}
        />
    );
}