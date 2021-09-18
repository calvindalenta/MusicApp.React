import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../slices/trackSlice";

type ChangeTrackCallback = (track: Track) => void;

interface AudioPlayer{
    currentTrack: Track;
    callback: ChangeTrackCallback;
}

interface AudioPlayerState {
  value: AudioPlayer;
}

const initialState: AudioPlayerState = {
  value: {
    currentTrack: null,
    callback: null,
  },
};

const audioPlayerSlice = createSlice({
    name: 'audioPlayer',
    initialState,
    reducers: {
        setCurrentTrack(state, action) {
            state.value.currentTrack = action.payload;
            return state;
        },
    },
});

export default audioPlayerSlice.reducer;