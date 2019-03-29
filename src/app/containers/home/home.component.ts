import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username$: Observable<string> = this.stateService.getUsername();

  constructor(private stateService: StateService) { }

  ngOnInit() {
  }

}
