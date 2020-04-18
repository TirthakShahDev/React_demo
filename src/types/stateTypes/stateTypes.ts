import { IArticleData } from "api/types";

export interface IValidationFormState {
  email: string;
  password: string;
  country: string;
}

export interface IArticleState {
  articles: IArticleData[];
  modal: boolean;
  articleSelected?: IArticleData;
  isActionHeaderAvailable: boolean;
}

export interface ILoginState {
  UserName: string;
  PassWord: string;
}

export interface IErrorLogState {
  hasError: boolean;
}
