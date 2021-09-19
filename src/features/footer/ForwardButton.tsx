import { withStyles } from '@material-ui/core';
import FastForwardIcon from '@material-ui/icons/FastForward';
import { OnMouseClick } from '../../types/events';

const FastForwardIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(FastForwardIcon);


export interface ForwardButtonProps {
    onClick: OnMouseClick;
}

export default function FowardButton(props: ForwardButtonProps){

    return (
        <FastForwardIconEx
        color='disabled'
        onClick={props.onClick}
        data-testid="forward"
        ></FastForwardIconEx>
    );
}