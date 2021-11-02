import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { AuthResponse } from '../interfaces/authResponse.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endPoint = 'clientes';

  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! }
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<Auth>(`${environment.apiUrl}/${this.endPoint}/6177ac65500d46c46b7c49c5`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      );
  }

  login() {

    // email: string, password: string
    // const url= `${environment.apiUrl}/${this.endPoint}`;
    // const body= {email, password};

    // return this.http.post<AuthResponse>(url, body);

    return this.http.get<Auth>(`${environment.apiUrl}/${this.endPoint}/6177ac65500d46c46b7c49c5`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('token', auth.id)))
      ;
  }

  logout() {
    this._auth = undefined;
  }
}
