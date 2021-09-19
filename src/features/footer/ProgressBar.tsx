type OnChangeProgressBar = (event: React.ChangeEvent<{}>, value: number | number[]) => void;

export interface ProgressBarProps {
    progress: number;
    onChange: OnChangeProgressBar;
    Bar: React.ComponentType<any>
}

export default function ProgressBar(props: ProgressBarProps){
    const { progress, onChange, Bar } = props;

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
        <Bar
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