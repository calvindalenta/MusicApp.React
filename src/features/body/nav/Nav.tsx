import './Nav.scss'
import { ListItem } from '@material-ui/core';
import NavItem from './NavItem';

function Nav(){
    return(
        <nav>
            <p className="nav-header">
                MUSIC
            </p>
            <NavItem text="Home" url="#" icon="fas fa-home fa-2x"></NavItem>
            <NavItem text="Songs" url="#" icon="fas fa-headphones fa-2x" active></NavItem>
            <NavItem text="Albums" url="#" icon="far fa-folder fa-2x"></NavItem>
            <NavItem text="Artists" url="#" icon="fas fa-user-friends fa-2x"></NavItem>

            <p className="nav-header">
                PLAYLISTS
            </p>
            <NavItem text="Best of Kancheli" url="#" icon="fas fa-list fa-2x"></NavItem>
            <NavItem text="Classical Musics" url="#" icon="fas fa-list fa-2x"></NavItem>
            <NavItem text="Mood Booster" url="#" icon="fas fa-list fa-2x"></NavItem>
            <NavItem text="Crying Heart" url="#" icon="fas fa-list fa-2x"></NavItem>
        </nav>        
    );
}

export default Nav;