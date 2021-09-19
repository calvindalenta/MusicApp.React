import { withStyles } from '@material-ui/core';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import { OnMouseClick } from '../../types/events';

const ShuffleIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(ShuffleIcon);


export interface ShuffleButtonProps {
    onClick: OnMouseClick;
}

export default function RepeatButton(props: ShuffleButtonProps){

    return (
        <ShuffleIconEx 
        color='disabled'
        onClick={props.onClick}
        data-testid="shuffle"
        ></ShuffleIconEx>
    );

}