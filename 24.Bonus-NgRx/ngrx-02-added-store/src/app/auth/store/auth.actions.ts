import { Action } from "@ngrx/store";

// export const LOGIN_START = '[Auth] Login Start';
export const LOGIN = "[Auth] Login";
export const LOGOUT = "[Auth] Login";

// export const LOGIN = 'LOGIN';
export const LOGINOUT = 'LOGINOUT';
export const LOGIN_START = '[Auth] Login Start';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
    readonly type = LOGINOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: {email:string, password: string}){}
}

export type AuthActions = Login | Logout;