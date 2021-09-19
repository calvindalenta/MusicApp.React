import { withStyles } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { OnMouseClick } from '../../types/events';

const FavoriteIconEx = withStyles(theme => ({
    root: {
        cursor: 'pointer',
        fontSize: '3.5vh',
    },
}))(FavoriteIcon);


export interface FavoriteButtonProps {
    active: boolean;
    onClick: OnMouseClick;
}

export default function FavoriteButton(props: FavoriteButtonProps){

    const color = props.active ? '#ffcb19' : '';

    return (
        <FavoriteIconEx 
        color='disabled'
        style={{color: color}}
        onClick={props.onClick}
        data-testid="favorite"
        >

        </FavoriteIconEx>
    );
}

FavoriteButton.defaultProps = {
    active: false,
}