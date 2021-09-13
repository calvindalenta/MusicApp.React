import { withStyles } from '@material-ui/core';
import ShuffleIcon from '@material-ui/icons/Shuffle';

const ShuffleIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(ShuffleIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface ShuffleButtonProps {
    onClick: OnMouseClick;
}

export default function RepeatButton(props: ShuffleButtonProps){

    return (
        <ShuffleIconEx 
        color='disabled'
        onClick={props.onClick}
        ></ShuffleIconEx>
    );

}