import { withStyles } from '@material-ui/core';
import FastRewindIcon from '@material-ui/icons/FastRewind';
import { OnMouseClick } from '../../types/events';

const FastRewindIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(FastRewindIcon);


export interface RewindButtonProps {
    onClick: OnMouseClick;
}

export default function RewindButton(props: RewindButtonProps){

    return (
        <FastRewindIconEx
        color="disabled"
        onClick={props.onClick}
        data-testid="rewind"
        >
        </FastRewindIconEx>
    );
}