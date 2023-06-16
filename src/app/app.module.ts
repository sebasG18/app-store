import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VarComponent } from './components/var/var.component';
import { E404Component } from './components/e404/e404.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { PolicyComponent } from './components/policy/policy.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { AdministracionProductosComponent } from './components/administracion-productos/administracion-productos.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './components/carrito/carrito.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { itemsReducer } from './ws_client/store/ws.reducer';
import { ROO_REDUCERS } from './state/actions/app.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VarComponent,
    E404Component,
    FooterComponent,
    ProductosComponent,
    ContactosComponent,
    OfertasComponent,
    PolicyComponent,
    ClientesComponent,
    AdministracionComponent,
    AdministracionProductosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(ROO_REDUCERS),
    StoreDevtoolsModule.instrument({ name: "TEST" })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
