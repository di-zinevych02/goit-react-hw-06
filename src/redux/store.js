import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
  persistStore,
    persistReducer,
   FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//зберігаємо обґєкт балансу (при оновлені редакс стан)
const contactPersistConfig = {
  key: "contact",
  storage,
};
//робимо копію нашого редюсера із конфігурацією роботи з локал стор
// якщо змінюється щось у редюсері контактів зберігається в локал стор
const persistedContactReducer = persistReducer(
  contactPersistConfig,
  contactsReducer
); 
export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filters: filtersReducer,

    },
    // ігнорування функцій в екшенах
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// за допомогою persistStore створюємо копію всього нашого стора, коли першй раз завантажується додаток прочитало шо в локал стор
export const persistor = persistStore(store);