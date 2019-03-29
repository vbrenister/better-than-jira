import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginRequestAction } from '@app/store/actions';
import { StateService } from '@app/services/state.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = '';
  password = '';

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

  login() {
    const { username, password } = this;
    this.stateService.login(username, password);
  }

}
