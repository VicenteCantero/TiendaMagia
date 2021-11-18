import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipos } from '../../interface/tipos.interfaces';
import { TiposService } from '../../services/tipos.service';
import { CrearTipoComponent } from '../../components/crear-tipo/crear-tipo.component';
import { observable } from 'rxjs';
import { ActualizarTipoComponent } from '../../components/actualizar-tipo/actualizar-tipo.component';
import { EliminarTipoComponent } from '../../components/eliminar-tipo/eliminar-tipo.component';


@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styles: []
})
export class TiposComponent implements OnInit {


  arrayTipos: Tipos[] = [];

  displayedColumns: string[] = ['Id', 'Nombre', 'Actualizar', 'Borrar'];
  dataSource = '';

  constructor(private tiposService: TiposService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {

    this.dameTipos();
  }

  crear() {

    const dialog = this.dialog.open(CrearTipoComponent, {
      width: '500px'
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
          this.dameTipos();
        }
      }
    )
  }

  actualizar(tipo: any) {

    const dialog = this.dialog.open(ActualizarTipoComponent, {
      width: '500px',
      data: tipo
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
          this.dameTipos();
        }

      })

  }

  borrarTipo(tipo: any) {
    // this.tiposService.borrarTipo(id)
    //   .subscribe(() => {
    //     this.dameTipos();
    //   });

    const dialog = this.dialog.open(EliminarTipoComponent, {
      width: '500px',
      data: tipo
    });

    dialog.afterClosed().subscribe(
      (result) => {

        if (result) {
          this.dameTipos();
        }

      })
  }


  dameTipos() {
    this.tiposService.getTipos().subscribe(data => {
      this.arrayTipos = data;
    });
  }
}
