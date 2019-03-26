import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginRequestAction } from '../store/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private store: Store<unknown>) { }

  ngOnInit() {
  }

  login() {
    const { username, password } = this;
    this.store.dispatch(new LoginRequestAction(username, password));
  }

}
