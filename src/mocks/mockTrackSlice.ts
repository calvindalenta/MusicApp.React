import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface Track{
    id: string;
    title: string;
    author: string;
    source: string;
    genre: string;
    filename: string;
    imageUrl: string;
    trackUrl: string;
}

export interface TrackState {
  value: Track[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
}



const initialState: TrackState = {
  value: [
    {
        id: '123',
        title: 'My song',
        author: 'Me Gusta',
        source: 'website.com',
        genre: 'Pop',
        filename: 'mymusicfile.mp3',
        imageUrl: 'api/image/123',
        trackUrl: 'api/track/123',
    },
    {
        id: '222',
        title: 'My song',
        author: 'Me Gusta',
        source: 'website.com',
        genre: 'Pop',
        filename: 'mymusicfile.mp3',
        imageUrl: 'api/image/222',
        trackUrl: 'api/track/222',
    },
    {
        id: '444',
        title: 'My song',
        author: 'Me Gusta',
        source: 'website.com',
        genre: 'Pop',
        filename: 'mymusicfile.mp3',
        imageUrl: 'api/image/444',
        trackUrl: 'api/track/444',
    },
  ],
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
            console.error("Failed to fetch data");
        })
    },
});

//export const {} = trackSlice.actions;

export const selectTrackState = (state: RootState) => state.track;

export default trackSlice.reducer;