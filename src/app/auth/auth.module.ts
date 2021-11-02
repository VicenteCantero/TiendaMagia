import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialAngularModule } from '../material-angular/material-angular.module';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialAngularModule,
    ReactiveFormsModule
    ]
})
export class AuthModule { }
