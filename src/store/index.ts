import { reducers } from './reducers/combined.reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadStorage, saveStorage } from '../utils/localStorage';

const persistentState = loadStorage();
export const store = createStore(reducers, persistentState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveStorage(store.getState());
});
