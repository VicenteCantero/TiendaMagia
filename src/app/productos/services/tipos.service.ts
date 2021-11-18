import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Tipos } from '../interface/tipos.interfaces';


@Injectable({
  providedIn: 'root'
})
export class TiposService {

  private endPoint ='tipo';

  constructor(private http: HttpClient) { }

  getTipos (): Observable<Tipos[]> {

    return this.http.get<Tipos[]>(`${environment.apiUrl}/${this.endPoint}/`)
  }

  getTiposPorId (id: string): Observable<Tipos>{

    return this.http.get<Tipos>(`${environment.apiUrl}${this.endPoint}${id}`)
  }

  existeNombre (nombre: string): Observable<Tipos> {
    return this.http.get<Tipos>(`${environment.apiUrl}/${this.endPoint}/nombre/${nombre}`)
  }

  actualizarTipo (tipo: Tipos): Observable<Tipos>{

    return this.http.put<Tipos>(`${environment.apiUrl}/${this.endPoint}/${tipo.id}`, tipo);
  }

  agregarTipo (tipo: Tipos): Observable<Tipos>{

    return this.http.post<Tipos>(`${environment.apiUrl}/${this.endPoint}/`, tipo);
  }

  borrarTipo (id: string): Observable<any>{

    return this.http.delete<any>(`${environment.apiUrl}/${this.endPoint}/${id}`);
  }
}
