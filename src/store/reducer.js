import { contactReducer } from './redux/contactSlice';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
whitelist:['contact']
}

const persistedReducer = persistReducer(persistConfig, contactReducer)

export const reducer = ({
  contact: persistedReducer,
})
