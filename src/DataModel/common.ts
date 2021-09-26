interface IError {
  message: string;
}

export interface IResponse<T> {
  data: T;
  error: IError;
}
