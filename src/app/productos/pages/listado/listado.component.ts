import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interface/producto.interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card {
      margin-top: 20px
    }
  
  `]
})
export class ListadoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {

    this.productosService.getProductos()
    .subscribe(productos => {
      this.productos = productos;
    });
  }

}
