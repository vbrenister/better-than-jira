import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getUsername } from 'src/app/store/reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username$: Observable<string> = this.store.pipe(
    select(getUsername)
  );

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
