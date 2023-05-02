import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VarComponent } from './var/var.component';
import { E404Component } from './e404/e404.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'productos', component: ProductosComponent},
{path: '', redirectTo: 'home', pathMatch:'full'},
{path: '**', component:E404Component}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
