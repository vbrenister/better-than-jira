import { Action } from '@ngrx/store';

export enum ActionType {
    LoginRequest = '[Login] Request',
    LoginSuccess = '[Login] Success',
    LoginFailure = '[Login] Failure'
}

export class LoginRequestAction implements Action {
    readonly type = ActionType.LoginRequest;

    constructor(public username: string,
                public password: string) {}
}

export class LoginSuccessAction implements Action {
    readonly type = ActionType.LoginSuccess;
}

export class LoginFailureAction implements Action {
    readonly type = ActionType.LoginFailure;
}


export type Union = LoginRequestAction 
                        | LoginSuccessAction 
                        | LoginFailureAction ;