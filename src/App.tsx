import './App.css';

import Header from './features/header/Header';
import Body from './features/body/Body';
import { Box, Container } from '@material-ui/core';

function App() {
  return (
    <div className="container" >
      <Header/>
      <Body/>
    </div>

  );
}

export default App;
