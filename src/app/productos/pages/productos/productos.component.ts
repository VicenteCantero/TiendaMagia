import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap} from 'rxjs/operators';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interface/producto.interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [`
  img {
    width: 90%;
    border-radius:5px;

  }
  `]
})
export class ProductosComponent implements OnInit {


  producto!: Producto;

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService,
              private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.productosService.getProductosPorId(id))
    )
    .subscribe( producto => this.producto = producto);
  }

  volver(){

    this.router.navigate(['/productos/listado'])
  }
}
