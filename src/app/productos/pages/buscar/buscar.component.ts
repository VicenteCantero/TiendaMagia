import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { Producto } from '../../interface/producto.interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  productos: Producto[] = [];

  productoSelecionado!: Producto;

  constructor(private productosService : ProductosService) { }

  ngOnInit(): void {
  }

    buscando() {

      this.productosService.getSugerencias(this.termino)
      .subscribe( productos => this.productos = productos);
    }
  
    opcionSeleccionada(event: MatAutocompleteSelectedEvent){
      const producto: Producto = event.option.value;
      this.termino= producto.nombre;

      this.productosService.getProductosPorId(producto.id)
      .subscribe( producto => this.productoSelecionado = producto);
    }

   
}
