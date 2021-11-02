import { Component, Input} from '@angular/core';
import { Producto } from '../../interface/producto.interfaces';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }

`]
})
export class ProductoTarjetaComponent {

  @Input() producto!: Producto
}
