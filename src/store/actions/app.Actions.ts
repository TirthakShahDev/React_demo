import { IAppAction, ActionType } from "./Helpers";
import { IErrorLog } from "../state/errorlog.state";
import { login as LoginUser } from "../../api/users";
import ability from "../../abilityConfig/ability";
import { ConvertAbility } from "../../utils/abilityConverter";
import { RawRule } from "@casl/ability";
import i18next from "i18next";
import { ILoginState } from "types/stateTypes";

export const loginAsync = (loginModel: ILoginState) => {
  return function(dispatch: any) {
    return LoginUser(loginModel)
      .then(async ({ data }) => {
        const abilities: RawRule[] = ConvertAbility(data.permissions);
        ability.update(abilities);
        data.abilities = abilities;
        await dispatch(login(data));
      })
      .catch(m => {
        alert(m.toString())
      })
      .finally();
  };
};

export const login = (data: any): IAppAction => {
  return { type: ActionType.LOGIN_REQUEST, payload: data };
};

export const logout = (): IAppAction => {
  removeError();
  return { type: ActionType.LOGOUT_REQUEST };
};

export const addError = (data: IErrorLog): IAppAction => {
  return { type: ActionType.ERROR_LOG, payload: data };
};

export const removeError = (): IAppAction => {
  return { type: ActionType.CLEAR_ERROR_LOG };
};

export const changeLanguage = (language :string): IAppAction => {
  i18next.changeLanguage(language);
  return { type: ActionType.CHANGE_LANGUAGE, payload : language};
};
