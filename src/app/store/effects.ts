import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { Union, ActionType, LoginFailureAction, LoginSuccessAction } from './actions';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { User } from './reducer';

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
            const user: User = {
                username: 'user1',
                displayName: 'User Number One'
            };
            if (ok) {
                window.sessionStorage.setItem('user', JSON.stringify(user));
                this.router.navigate(['/']);
                return new LoginSuccessAction(user);
            }
            return new LoginFailureAction();
        }),
        catchError(() => of(new LoginFailureAction()))
    );

    @Effect({ dispatch: false })
    logout$ = this.actions$
        .pipe(
            ofType(ActionType.Logout),
            tap(() => {
                window.sessionStorage.removeItem('user');
                this.router.navigate(['/login']);
            }),
        );

    constructor(private actions$: Actions<Union>,
                private dataService: DataService,
                private router: Router) {
    }

}