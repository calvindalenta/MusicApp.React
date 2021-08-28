import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Track{
    id: string;
    title: string;
    author: string;
    source: string;
    genre: string;
    filename: string;
}

export interface TrackState {
  value: Track[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}

const initialState: TrackState = {
  value: [],
  status: 'idle',
};

export const fetchTracksAsync = createAsyncThunk(
  'track/fetchTracks',
  async () => {
    const response = await fetch("api/tracks");
    // The value we return becomes the `fulfilled` action payload
    const tracks: Track[] = await response.json()
    return tracks;
  }
);

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(fetchTracksAsync.pending, (state: TrackState) => {
            state.status = "loading";
        });
        builder.addCase(fetchTracksAsync.fulfilled, (state: TrackState, action) => {
            state.status = "succeeded";
            state.value = action.payload;
        });
        builder.addCase(fetchTracksAsync.rejected, (state) => {
            state.status = "failed";
            console.log("Failed to fetch data");
        })
    },
});

//export const {} = trackSlice.actions;

export const selectTrackState = (state: RootState) => state.track;

export default trackSlice.reducer;