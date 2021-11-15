import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Producto } from '../interface/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private endPoint ='/productos/';

  constructor(private http: HttpClient) { }

  getProductos (): Observable<Producto[]> {

    return this.http.get<Producto[]>(`${environment.apiUrl}${this.endPoint}`)
  }


  getProductosPorId (id: string): Observable<Producto>{

    return this.http.get<Producto>(`${environment.apiUrl}${this.endPoint}${id}`)
  }

  // getSugerencias (termino: string): Observable<Producto[]>{

  //   return this.http.get<Producto[]>(`${environment.apiUrl}${this.endPoint}{"nombre": {"$regex": ${termino}}}`)

  // }

  // getProductosPorNombre (nombre: string): Observable<Producto>{

  //   return this.http.get<Producto>(`${environment.apiUrl}${this.endPoint}${nombre}`)
  // }

  agregarProducto (producto: Producto): Observable<Producto>{

    return this.http.post<Producto>(`${environment.apiUrl}${this.endPoint}`, producto);
  }

  actualizarProducto (producto: Producto): Observable<Producto>{

    return this.http.put<Producto>(`${environment.apiUrl}${this.endPoint}${producto.id}`, producto);
  }

  borrarProducto (id: string): Observable<any>{

    return this.http.delete<any>(`${environment.apiUrl}${this.endPoint}${id}`);
  }
}
