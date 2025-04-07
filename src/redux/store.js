import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,

    },
});