
import { withStyles } from '@material-ui/core';
import FastRewindIcon from '@material-ui/icons/FastRewind';

const FastRewindIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(FastRewindIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface RewindButtonProps {
    onClick: OnMouseClick;
}

export default function RewindButton(props: RewindButtonProps){

    return (
        <FastRewindIconEx
        color="disabled"
        onClick={props.onClick}
        >
        </FastRewindIconEx>
    );
}