import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo:'auth',
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  
  },
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule),
    // canLoad:[ AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    //component: ErrorPageComponent,
    redirectTo: '404',
  }

]


@NgModule({
 imports: [
   RouterModule.forRoot( routes)
 ],
 exports: [
   RouterModule
 ]
 
})
export class AppRoutingModule { }
