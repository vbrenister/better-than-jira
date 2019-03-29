import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getUsername } from '../store/reducer';
import { Observable } from 'rxjs';
import { LoginRequestAction } from '../store/actions';

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


}
