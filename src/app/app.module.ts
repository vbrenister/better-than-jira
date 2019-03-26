import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
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
import { LoginPageComponent } from './login-page/login-page.component';
import { EffectsModule } from '@ngrx/effects';
import { CommonEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    EffectsModule.forRoot([CommonEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
