import { withStyles } from '@material-ui/core';
import FastForwardIcon from '@material-ui/icons/FastForward';

const FastForwardIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(FastForwardIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface ForwardButtonProps {
    onClick: OnMouseClick;
}

export default function FowardButton(props: ForwardButtonProps){

    return (
        <FastForwardIconEx
        color='disabled'
        onClick={props.onClick}
        ></FastForwardIconEx>
    );
}