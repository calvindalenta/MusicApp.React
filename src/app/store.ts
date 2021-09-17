import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AudioPlayerReducer from '../slices/playerSlice';
import TrackReducer from '../slices/trackSlice';

export const store = configureStore({
  reducer: {
    track: TrackReducer,
    audioPlayer: AudioPlayerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
