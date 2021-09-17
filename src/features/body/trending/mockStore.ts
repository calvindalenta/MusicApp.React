import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export default configureStore({
    reducer: {
        audioPlayer: audioPlayerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
