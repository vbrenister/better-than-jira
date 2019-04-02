import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getUsername, User } from '../store/reducer';
import { Observable } from 'rxjs';
import { LoginRequestAction, SetUserDataAction, LogoutAction } from '../store/actions';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private store: Store<State>) { }

  getUsername(): Observable<string> {
    return this.store.pipe(
      select(getUsername)
    );
  }

  login(username: string, password: string) {
    this.store.dispatch(new LoginRequestAction(username, password));
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  setUserData(user: User) {
    this.store.dispatch(new SetUserDataAction(user));
  }
}
