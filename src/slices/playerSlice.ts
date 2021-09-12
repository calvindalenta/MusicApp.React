import
{ 
  // createAsyncThunk,
  createSlice, 
  PayloadAction 
} from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Track } from './trackSlice';

export interface AudioPlayer{
    currentTrack: Track;
    callback: Function;
}

export interface AudioPlayerState {
  value: AudioPlayer;
}

const initialState: AudioPlayerState = {
  value: {
    currentTrack: null,
    callback: null,
  },
};

export const audioPlayerSlice = createSlice({
  name: 'audioPlayer',
  initialState,
  reducers: {
      setCurrentTrack(state, action: PayloadAction<Track>) {
        state.value.currentTrack = action.payload;
        state.value.callback(state.value.currentTrack.id);
        return state;
      },
      registerCallback(state, action: PayloadAction<Function>){
        state.value.callback = action.payload;
        return state;
      },
      // setDuration(state, action: PayloadAction<number>) {
      //   state.value.duration = action.payload;
      //   return state;
      // },
      // setCurrentTime(state, action: PayloadAction<number>) {
      //   state.value.currentTime = action.payload;
      //   return state;
      // },
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
  registerCallback,
  // setDuration,
  // setCurrentTime,
  // setPlayer,
  // playAudio
} = audioPlayerSlice.actions;

export const selectAudioPlayerState = (state: RootState) => state.audioPlayer;

export default audioPlayerSlice.reducer;