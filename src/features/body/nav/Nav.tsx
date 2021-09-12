import './Nav.scss'

function Nav(){
    return(
        <nav>
            <p className="nav-header">
                MUSIC
            </p>
            <a className="nav-item" href="#">
                <i className="fas fa-home fa-2x"></i>
                <p>Home</p>
            </a>
            <a className="nav-item active" href="#">
                <i className="fas fa-headphones fa-2x"></i>
                <p>Songs</p>
            </a>
            <a className="nav-item" href="#">
                <i className="far fa-folder fa-2x"></i>
                <p>Albums</p>
            </a>
            <a className="nav-item" href="#">
                <i className="fas fa-user-friends fa-2x"></i>
                <p>Artists</p>
            </a>

            <p className="nav-header">
                PLAYLISTS
            </p>
            <a className="nav-item" href="#">
                <i className="fas fa-list fa-2x"></i>
                <p>Best of Kancheli</p>
            </a>
            <a className="nav-item" href="#">
                <i className="fas fa-list fa-2x"></i>
                <p>Classical Musics</p>
            </a>
            <a className="nav-item" href="#">
                <i className="fas fa-list fa-2x"></i>
                <p>Mood Booster</p>
            </a>
            <a className="nav-item" href="#">
                <i className="fas fa-list fa-2x"></i>
                <p>Crying Heart</p>
            </a>
        </nav>        
    );
}

export default Nav;