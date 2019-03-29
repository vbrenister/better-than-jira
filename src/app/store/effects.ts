import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { Union, ActionType, LoginFailureAction, LoginSuccessAction } from './actions';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Injectable()
export class CommonEffects {

    @Effect()
    login$ = this.actions$.
    pipe(
        ofType(ActionType.LoginRequest),
        switchMap(action =>
            this.dataService
            .login(action.username, action.password)),
        map(ok => {
            if (ok) {
                this.router.navigate(['/home']);
                return new LoginSuccessAction('LOGIN');
            }
            return new LoginFailureAction();
        }),
        catchError(() => of(new LoginFailureAction()))
    );

    constructor(private actions$: Actions<Union>,
                private dataService: DataService,
                private router: Router) {
    }

}