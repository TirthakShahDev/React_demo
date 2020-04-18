import { Action } from 'redux';

export enum ActionType {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    ERROR_LOG,
    CLEAR_ERROR_LOG,
    TOGGLE_SIDEBAR,
    CHANGE_LANGUAGE
}

export interface IAppAction extends Action<ActionType> {
    payload?: any;
}
