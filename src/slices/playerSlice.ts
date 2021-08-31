import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Track } from './trackSlice';

export interface AudioPlayer{
    track: Track;
    duration: number;
    currentTime: number;
}

export interface AudioPlayerState {
  value: AudioPlayer;
}

const initialState: AudioPlayerState = {
  value: {
    track: null,
    duration: 0,
    currentTime: 0,
  },
};

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
      setCurrentTrack(state, action) {
        state.value.track = action.payload;
        return state;
      },
      setDuration(state, action: PayloadAction<number>) {
        state.value.duration = action.payload;
        return state;
      },
      setCurrentTime(state, action: PayloadAction<number>) {
        state.value.currentTime = action.payload;
        return state;
      },
      // setPlayer(state, action){
      //   state.value.player = action.payload;
      //   return state;
      // },
      // playAudio(state){
      //   if (state.value.track && state.value.player){
      //       state.value.player.play();
      //       return state;
      //   }
      // },
  },
});

export const
{
  setCurrentTrack,
  setDuration,
  setCurrentTime,
  // setPlayer,
  // playAudio
} = audioPlayerSlice.actions;

export const selectAudioPlayerState = (state: RootState) => state.audioPlayer;

export default audioPlayerSlice.reducer;