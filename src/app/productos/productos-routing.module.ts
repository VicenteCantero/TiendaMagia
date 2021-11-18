import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { TiposComponent } from './pages/tipos/tipos.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: 'tipos',
        component: TiposComponent
      },
      {
        path: ':id',
        component: ProductosComponent
      },
      {
        path: '**',
        redirectTo: 'listado'
      }
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosRoutingModule { }
