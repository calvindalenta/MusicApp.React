import { configureStore, createSlice } from "@reduxjs/toolkit";
import AudioPlayerReducer from './mockPlayerSlice';
import TrackReducer from './mockTrackSlice';

export default configureStore({
    reducer: {
        audioPlayer: AudioPlayerReducer,
        track: TrackReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
