import { Slider, withStyles } from "@material-ui/core";

// https://stackoverflow.com/questions/53892108/color-change-for-the-loading-bar-component-of-material-ui
const TrackSlider = withStyles(theme => ({
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

type OnChangeProgressBar = (event: React.ChangeEvent<{}>, value: number | number[]) => void;

export interface ProgressBarProps {
    progress: number;
    onChange: OnChangeProgressBar;
}

export default function MobileProgressBar(props: ProgressBarProps){
    const { progress, onChange } = props;

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
            data-testid="mobile-progress-bar"
        />
    );
}