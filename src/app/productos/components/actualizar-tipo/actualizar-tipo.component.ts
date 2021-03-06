import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tipos } from '../../interface/tipos.interfaces';
import { TiposService } from '../../services/tipos.service';


@Component({
  selector: 'app-actualizar-tipo',
  templateUrl: './actualizar-tipo.component.html',
  styles: [
  ]
})
export class ActualizarTipoComponent implements OnInit {

 

  tipo: Tipos = {
    id: '',
    nombre: ''
  };


  constructor(private dialogRef: MatDialogRef<ActualizarTipoComponent>,
    public MatFormFieldModule: MatFormFieldModule,
    private tiposService: TiposService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Tipos) { }

  ngOnInit(): void {

  this.tipo = {
    id: this.data.id,
    nombre: this.data.nombre
  };

  }
  actualizar() {
    if (this.tipo.nombre.trim().length === 0) {
      this.mostrarSnakBar('Escriba un nombre');
      return;
    }
    this.tiposService.existeNombre(this.tipo.nombre)
      .subscribe(resp => {
        if (resp) {
          this.mostrarSnakBar('Nombre repetido')
        }
        else {
          this.tiposService.actualizarTipo(this.tipo)
            .subscribe(() => {
              this.mostrarSnakBar('Tipo actualizado');
              this.dialogRef.close(true);
            })
        }
      }
      )
    this.dialogRef.close(true);
  }

  cerrar() {
    this.dialogRef.close();
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, this.data.nombre, {
      duration: 2500
    })
  }

}
