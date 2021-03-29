import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from './reducer';
import storage from 'redux-persist/lib/storage';

const persistedReducer = persistReducer({
  key: 'react-st',
  storage,
  whitelist: ["cartItems", "totalItems", "user"]
}, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persist = persistStore(store);

export { store, persist };