import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Tipos } from '../../interface/tipos.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TiposService } from '../../services/tipos.service';

@Component({
  selector: 'app-crear-tipo',
  templateUrl: './crear-tipo.component.html',
  styles: []
})
export class CrearTipoComponent implements OnInit {

  tipo: Tipos = {
    id: '',
    nombre: '',
  }

  constructor(private dialogRef: MatDialogRef<CrearTipoComponent>,
    public MatFormFieldModule: MatFormFieldModule,
    private tiposService: TiposService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }


  crear() {
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
          this.tiposService.agregarTipo(this.tipo)
            .subscribe(tipo => {
              this.mostrarSnakBar('Tipo creado');
              this.dialogRef.close(true);
            })
        }
      }
      )
  }

  cerrar() {
    this.dialogRef.close(false);
  }

  mostrarSnakBar(mensaje: string) {
    this.snackBar.open(mensaje, this.tipo.nombre, {
      duration: 2500
    })
  }

}
