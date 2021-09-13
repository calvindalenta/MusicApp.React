import { withStyles } from '@material-ui/core';
import RepeatIcon from '@material-ui/icons/Repeat';

const RepeatIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(RepeatIcon);

type OnMouseClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

export interface RepeatButtonProps {
    onClick: OnMouseClick;
}

export default function RepeatButton(props: RepeatButtonProps){

    return (
        <RepeatIconEx 
        color='disabled'
        onClick={props.onClick}
        ></RepeatIconEx>
    );

}