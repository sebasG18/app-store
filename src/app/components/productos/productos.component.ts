import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio: ProductosService){

  }
  dataProducts: any;

  ngOnInit(){
    this.servicio.getProcutos().subscribe(products => {
      this.dataProducts=products
    })
  }
}
