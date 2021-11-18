import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialAngularModule } from '../material-angular/material-angular.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { CrearTipoComponent } from './components/crear-tipo/crear-tipo.component';
import { ActualizarTipoComponent } from './components/actualizar-tipo/actualizar-tipo.component';
import { EliminarTipoComponent } from './components/eliminar-tipo/eliminar-tipo.component';







@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ProductosComponent,
    HomeComponent,
    ListadoComponent,
    ProductoTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent,
    TiposComponent,
    CrearTipoComponent,
    ActualizarTipoComponent,
    EliminarTipoComponent
  
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialAngularModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
