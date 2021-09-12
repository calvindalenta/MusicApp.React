import { ListItem } from '@material-ui/core';

export interface NavItemProps {
    text: string;
    icon: string;
    url: string;
    active: boolean;
}

export default function NavItem(props: NavItemProps){

    const classes = "nav-item".concat(props.active ? " active" : '');

    return (
        <ListItem button className={classes}>
            <i className={props.icon}></i>
            <p>{props.text}</p>
        </ListItem>
    );
}

NavItem.defaultProps = {
    active: false,
}