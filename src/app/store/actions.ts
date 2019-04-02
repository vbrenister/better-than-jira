import { Action } from '@ngrx/store';
import { User } from './reducer';

export enum ActionType {
    LoginRequest = '[Login] Request',
    LoginSuccess = '[Login] Success',
    LoginFailure = '[Login] Failure',
    SetUserData = '[User] Set data',
    Logout = '[Logout] Logout'
}

export class LoginRequestAction implements Action {
    readonly type = ActionType.LoginRequest;

    constructor(public username: string,
                public password: string) {}
}

export class LoginSuccessAction implements Action {
    readonly type = ActionType.LoginSuccess;

    constructor(public user: User) {}
}

export class LoginFailureAction implements Action {
    readonly type = ActionType.LoginFailure;
}

export class SetUserDataAction implements Action {
    readonly type = ActionType.SetUserData;

    constructor(public user: User) { }
}

export class LogoutAction implements Action {
    readonly type = ActionType.Logout;
}


export type Union = LoginRequestAction 
                        | LoginSuccessAction 
                        | LoginFailureAction
                        | SetUserDataAction
                        | LogoutAction;