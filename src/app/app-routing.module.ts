import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { E404Component } from './components/e404/e404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'productos', component: ProductosComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'ofertas', component:OfertasComponent}, 
{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: E404Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
