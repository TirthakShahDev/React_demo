import { IAppAction, ActionType } from "./../actions/Helpers";
import { ErrorLog } from "../state/errorlog.state";

export const ErrorLogReducer = (
  state: ErrorLog = new ErrorLog(),
  action: IAppAction
): ErrorLog => {
  switch (action.type) {
    case ActionType.ERROR_LOG:
      state.errors.push(action.payload);
      return {
        ...state
      };
    case ActionType.CLEAR_ERROR_LOG:
      return null;
    default:
      return state;
  }
};
