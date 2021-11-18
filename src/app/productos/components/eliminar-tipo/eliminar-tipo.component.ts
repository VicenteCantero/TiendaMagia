import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tipos } from '../../interface/tipos.interfaces';
import { TiposService } from '../../services/tipos.service';

@Component({
  selector: 'app-eliminar-tipo',
  templateUrl: './eliminar-tipo.component.html',
  styles: [
  ]
})
export class EliminarTipoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EliminarTipoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tipos,
    private tiposService: TiposService,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  borrar(id: string) {
    this.tiposService.estaEnUso(id)
      .subscribe(resp => {
        if (resp) {
          this.mostrarSnakBar('Tipo en uso');
          this.dialogRef.close(false);
        }
        else {
          this.tiposService.borrarTipo(id)
            .subscribe(tipo => {
              this.mostrarSnakBar('Tipo borrado');
              this.dialogRef.close(true);
            })
        }
      })
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
