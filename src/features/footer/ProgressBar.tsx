import { Slider, withStyles } from "@material-ui/core";

// https://stackoverflow.com/questions/53892108/color-change-for-the-loading-bar-component-of-material-ui
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
        width: '100%',
    },
    rail: {
        height: '1vh',
        width: '100%',
    },
}))(Slider);

type OnChangeProgressBar = (event: React.ChangeEvent<{}>, value: number | number[]) => void;

export interface ProgressBarProps {
    progress: number;
    onChange: OnChangeProgressBar;
}

export default function ProgressBar(props: ProgressBarProps){
    const { progress, onChange } = props;

    // Determining click position on progress bar
    // https://stackoverflow.com/questions/28311631/determine-click-position-on-progress-bar
    // function onClickProgressBar(event: React.MouseEvent<HTMLSpanElement, MouseEvent>){
    //     const clickX = event.pageX;
    //     const barWidth = document.body.clientWidth; // Assuming the bar has the same width with document.body
    //     const percentage = (clickX / barWidth);
    //     // const progressBarValue = percentage  * maxBarValue;
    //     // const playerValue = percentage * 248;
    //     onClick(percentage);
    //     // dispatch(setCurrentTime(playerValue));
    // }

    // function updateProgressBar(currentTime: number, duration: number){
    //     const percentage = currentTime / duration;
    //     const progressBarValue = percentage * maxBarValue;
    //     onClick(progressBarValue, 0);
    // }

    return (
        <TrackSlider
            id="progress-bar"
            value={progress}
            // onClick={test}
            onChange={onChange}
            // aria-label="current time"
            min={0}
            max={100}
            step={1}
            // defaultValue={0}
        />
    );
}