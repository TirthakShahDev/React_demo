import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect";
import { Model } from "./helpers.state";
import { User } from "./user.state";
import { ErrorLog } from "./errorlog.state";

export interface IAppState {
  userData?: User;
  errorLog?: ErrorLog;
}

export const AppStateModel = Model<IAppState>({
  userData: null,
  errorLog: null
});

export class AppState extends AppStateModel {
  public UserData: User;
  public errorLog: ErrorLog;
}

export const isAuthenticated = connectedRouterRedirect({
  redirectPath: "/login",
  authenticatedSelector: (state: AppState) => {
    if (
      state.UserData == null ||
      state.UserData.token === null ||
      state.UserData.token === ""
    ) {
      return false;
    }
    return true;
  },
  wrapperDisplayName: "Authenticated"
}) as any;
