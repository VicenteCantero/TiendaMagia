import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService) {

  }

  canActivate( ) {

    var token = this.authService.obtenerToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }

    // return this.authService.verificaAutenticacion()
    // .pipe (
    //   tap ( estaAutenticado => {
    //     if(!estaAutenticado){
    //       this.router.navigate(['./auth/login']);
    //     }
    //   })
    // )



    // if (this.authService.auth.id) {
    //   return true;
    // }
    // return false;
  }


  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

  //     return this.authService.verificaAutenticacion()
  //     .pipe (
  //       tap ( estaAutenticado => {
  //         if(!estaAutenticado){
  //           this.router.navigate(['./auth/login']);
  //         }
  //       })
  //     )



  // if (this.authService.auth.id) {
  //   return true;
  // }
  // return false;
}

