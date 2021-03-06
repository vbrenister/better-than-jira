import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { MatCardModule, MatToolbar, MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducer';
import { LoginPageComponent } from '@app/containers/login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './store/effects';
import { HomeComponent } from '@app/containers/home/home.component';
import { IssueListComponent } from './containers/issue-list/issue-list.component';
import { IssueDetailsComponent } from './containers/issue-details/issue-details.component';
import { StateService } from './services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    IssueListComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    CommonModule,
    EffectsModule.forRoot([CommonEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    useFactory: (stateService: StateService) => () => {
      const user = window.sessionStorage.getItem('user');
      if (user) {
        stateService.setUserData(JSON.parse(user));
      }
    },
    deps: [StateService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
