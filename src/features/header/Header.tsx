import './Header.scss';
// import UserControl from './UserControl/UserControl';
// import Logo from './Logo/Logo';

function Header() {

  return (
      <header>
        <a className="main-logo" href="/">
          <div className="logo-image">
            <img src="/logo32.png" alt="MusCloud Logo" />
          </div>
          <h1>MusCloud</h1>
        </a>
        <div className="search">
            <i className="fas fa-search fa-2x"></i>
            <input type="search" name="track-search" id="search" placeholder="Search for songs, artists, albums, etc..."/>
        </div>
        <div className="user">
            <i className="fas fa-user-circle fa-3x"></i>
            <p>Username</p>
        </div>
      </header>
  );

}

export default Header;
