import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.stateService.getUsername().pipe(
      map(username => username ? true : this.router.createUrlTree(['/login']))
    );
  }

  constructor(private stateService: StateService, private router: Router) { }
}
