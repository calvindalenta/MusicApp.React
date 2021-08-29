import React, {useEffect} from 'react';
import './App.css';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { TrackState, fetchTracksAsync, selectTrackState } from './slices/trackSlice';

import Header from './features/header/Header';

function App() {
  const tracks: TrackState = useAppSelector(selectTrackState);
  const dispatch = useAppDispatch();

  // const view = tracks.value.map(track => {
  //   return <p key={track.id}>{track.author}</p>
  // })

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
