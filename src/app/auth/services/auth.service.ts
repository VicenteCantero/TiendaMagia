import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { AuthResponse } from '../interfaces/authResponse.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = 'usuario';


  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  obtenerToken() {
    var token= localStorage.getItem('token');
    if (token) {
      return token;
    }else{
      return null;
    }

  }

  // //mi no entender
  // verificaAutenticacion(): Observable<boolean> {
  //   if (!localStorage.getItem('token')) {
  //     return of(false);
  //   }
  //   return this.http.get<Auth>(`${environment.apiUrl}/${this.endPoint}/login`)
  //     .pipe(
  //       map(auth => {
  //         this._auth = auth;
  //         return true;
  //       })
  //     );
  // }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }

  registro(nombre: string, email: string, password: string) {

    const url = `${environment.apiUrl}/${this.endPoint}/registro`;
    const body = { nombre, email, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.token) {
            localStorage.setItem('token', resp.token!)
            this._auth = this.auth
          }
        }),
        map(res => res.token),
        catchError(err => of(false))
      );
  }

  login(nombre: string, password: string) {

    const url = `${environment.apiUrl}/${this.endPoint}/login`;
    const body = { nombre, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.token) {
            localStorage.setItem('token', resp.token!)
            // this._auth = this.auth
          }
        }),
        map(res => res.token),
        catchError(err => of(false))
      );
  }
}
