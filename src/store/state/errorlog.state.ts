export interface IErrorLog {
  err: Error;
  info: string;
}


export class ErrorLog  {
  public static ERRORS = "errors";
  public errors: Array<IErrorLog> = [];
}
