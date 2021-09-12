import './App.scss';

import Header from './features/header/Header';
import Body from './features/body/Body';
import Footer from './features/footer/Footer';
import Player from './features/player/Player';
import { Box, Container } from '@material-ui/core';

function App() {
  return (
    <div className="body">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
