import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Producto } from '../../interface/producto.interfaces';
import { ProductosService } from '../../services/productos.service';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { ImagenHelperService } from '../../services/imagen-helper.service';
import { TiposService } from '../../services/tipos.service';
import { Tipos } from '../../interface/tipos.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
  `]
})


export class AgregarComponent implements OnInit {

  // tipos: string[] = [
  //   "Magia de Cerca", "Magia de Salón", "Magia de Escena", "Libros", "Grandes ilusiones", "Dvds", "Complementos"
  // ]

  arrayTipos: Tipos[] = [];

  producto: Producto = {
    id: '',
    nombre: '',
    creador: '',
    precio: '',
    alt_img: '',
    descripcion: '',
    tipo: '',
    cantidad: '',
  }

  selected_image: string = '';
  archivosASubir!: File;
  imagenAMostrar: string = '';

  constructor(private productosService: ProductosService,
    private tiposService: TiposService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private imagenHelperService: ImagenHelperService) { }

  ngOnInit(): void {

    this.dameTipos();

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.productosService.getProductosPorId(id))
      )
      .subscribe(producto => {
        this.producto = producto;
        this.imagenAMostrar = producto.alt_img;
      });
  }

  guardar() {

    if (this.producto.nombre.trim().length === 0) {
      return;
    }
    //introducir mensaje de nombre obligatorio

    if (this.imagenAMostrar) {
      this.producto.alt_img = this.imagenAMostrar;
    }

    if (this.producto.id) {

      this.productosService.actualizarProducto(this.producto)
        .subscribe(producto => {
          this.router.navigate([`/productos/listado`]);
          this.mostrarSnakBar('Producto actualizado')
        })
    } else {
      this.productosService.agregarProducto(this.producto)
        .subscribe(producto => {
          this.router.navigate([`/productos/listado`]);
          this.mostrarSnakBar('Producto creado')
        })
    }

  }

  borrarProducto() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '500px',
      data: this.producto
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
          this.productosService.borrarProducto(this.producto.id)
            .subscribe(respuesta => {
              this.router.navigate([`/productos/listado`]);
            })
        }

      })

    // this.productosService.borrarProducto(this.producto.id)
    // .subscribe( respuesta => {
    //   this.router.navigate([`/productos/listado`]);
    // });
  }


  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, this.producto.nombre, {
      duration: 2500
    })
  }

  fileChangeEvent(fileInput: any) {
    this.archivosASubir = <File>fileInput.target.files[0];
    this.imagenHelperService.readFileContent(this.archivosASubir)
      .then(resp => this.imagenAMostrar = resp)

    this.selected_image = this.archivosASubir ? this.archivosASubir.name : '';
  }

  dameTipos() {
    this.tiposService.getTipos().subscribe(data => {
      this.arrayTipos = data;
    });
  }
}
