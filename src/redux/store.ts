import { configureStore } from '@reduxjs/toolkit'
import orebiReducer from './orebiSlice'
import { persistStore,persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    WebStorage
 } from 'redux-persist'

export const store = configureStore({
  reducer: {
    orebi:orebiReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch