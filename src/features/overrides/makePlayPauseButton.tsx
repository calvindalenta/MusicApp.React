import { withStyles } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

export const makePlayButton = (styles: any) => {
    const result = withStyles(styles)(PlayCircleFilledIcon)
    return result;
}

export const makePauseButton = (styles: any) => {
    const result = withStyles(styles)(PauseCircleFilledIcon)
    return result;
}

export const makePlayPauseButton = (styles: any) => {
    const playButton = makePlayButton(styles);
    const pauseButton = makePauseButton (styles);

    return {
        play: playButton,
        pause: pauseButton
    };
}