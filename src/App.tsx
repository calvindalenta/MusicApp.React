import React, {useEffect} from 'react';
import './App.css';

import { useAppSelector, useAppDispatch } from './app/hooks';
import { TrackState, fetchTracksAsync, selectTrackState } from './slices/trackSlice';


function App() {
  const tracks: TrackState = useAppSelector(selectTrackState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tracks.status === "succeeded") return;
    if (tracks.status === "loading") return;

    // Should retry fetching
    // if (tracks.status === "failed"){
    //   dispatch(fetchTracksAsync());
    // }
  })

  const view = tracks.value.map(track => {
    return <p key={track.id}>{track.author}</p>
  })

  return (
    <div className="App">
      Test
      {tracks.value.length === 0 ? <p>Loading...</p>: view}
    </div>
  );
}

export default App;
