import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    return of(username === password);
  }
}
