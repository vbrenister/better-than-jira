import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '@app/containers/login-page/login-page.component';
import { AuthorizationGuardService } from './services/authorization-guard.service';
import { HomeComponent } from '@app/containers/home/home.component';
import { IssueListComponent } from './containers/issue-list/issue-list.component';
import { IssueDetailsComponent } from './containers/issue-details/issue-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'issues', pathMatch: 'full' },
    { path: 'issues', component: IssueListComponent, pathMatch: 'full' , canActivate: [AuthorizationGuardService] },
    { path: 'issues/:id', component: IssueDetailsComponent, canActivate: [AuthorizationGuardService] }
  ]
},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
