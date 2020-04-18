import { IAppAction, ActionType } from "./../actions/Helpers";
import { User } from "../state/user.state";

export const AuthenticationReducer = (
  state: User = null,
  action: IAppAction
): User => {
  switch (action.type) {
    case ActionType.LOGIN_REQUEST:
      return {
        ...state,
        token: action.payload.accessToken,
        email: action.payload.username,
        roles: action.payload.roles,
        permissions: action.payload.permissions,
        abilities: action.payload.abilities,
        language: action.payload.language
      };
    case ActionType.LOGOUT_REQUEST:
      return null;
    case ActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language : action.payload
      };
    default:
      return state;
  }
};
