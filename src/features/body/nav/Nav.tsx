import './Nav.scss'
import { ListItem } from '@material-ui/core';
    
function Nav(){
    return(
        <nav>
            <p className="nav-header">
                MUSIC
            </p>
            <ListItem button className="nav-item">
                    <i className="fas fa-home fa-2x"></i>
                    <p>Home</p>
            </ListItem>
            <ListItem button className="nav-item active">
                <i className="fas fa-headphones fa-2x"></i>
                <p>Songs</p>
            </ListItem>
            <ListItem button className="nav-item">
                <i className="far fa-folder fa-2x"></i>
                <p>Albums</p>
            </ListItem>
            <ListItem button className="nav-item">
                <i className="fas fa-user-friends fa-2x"></i>
                <p>Artists</p>
            </ListItem>

            <p className="nav-header">
                PLAYLISTS
            </p>
            <ListItem button className="nav-item">
                <i className="fas fa-list fa-2x"></i>
                <p>Best of Kancheli</p>
            </ListItem>
            <ListItem button className="nav-item">
                <i className="fas fa-list fa-2x"></i>
                <p>Classical Musics</p>
            </ListItem>
            <ListItem button className="nav-item">
                <i className="fas fa-list fa-2x"></i>
                <p>Mood Booster</p>
            </ListItem>
            <ListItem button className="nav-item">
                <i className="fas fa-list fa-2x"></i>
                <p>Crying Heart</p>
            </ListItem>
        </nav>        
    );
}

export default Nav;