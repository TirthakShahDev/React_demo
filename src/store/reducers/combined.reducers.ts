import { combineReducers } from 'redux';
import { AuthenticationReducer } from './authentication.reducer';
import { ErrorLogReducer } from './errorLog.Reducer';

export const reducers = combineReducers({
    UserData: AuthenticationReducer,
    errorLog: ErrorLogReducer
});
