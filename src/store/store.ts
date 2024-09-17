import { combineReducers, configureStore } from '@reduxjs/toolkit';
import hacktonReducer from './slices/hacktonSlice';

const rootReducer = combineReducers({
    hackthon: hacktonReducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
