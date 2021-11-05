import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule} from '@auth0/angular-jwt'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { MaterialAngularModule } from './material-angular/material-angular.module';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialAngularModule,
    AppRoutingModule,
    JwtModule.forRoot({ config: {
      tokenGetter: tokenGetter,
      allowedDomains: ['localhost:8000'],
      disallowedRoutes: []
    }})  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
