import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicio: ProductosService){}
  dataProducts: any;

  guardarProductos(id:string, nombre:string, precio:string, image:string){
    const temp={
      "id": id,
      "nombre": nombre,
      "precio": precio,
      "image": image
    }

    this.servicio.postProductos(temp).subscribe(u =>{})

  }

  actualizarProductos(id:string, nombre:string, precio:string, image:string){
    const temp={
      "id": id,
      "nombre": nombre,
      "precio": precio,
      "image": image
    }

    this.servicio.putProductos(temp, id).subscribe(u=>{})
  }


  eliminarProductos(id: string){
    this.servicio.deleteProductos(id).subscribe(u=>{})
     

    }
  dataProductos:any={};
  ngOnInit(){
    this.servicio.getProcutos().subscribe(products => {
      this.dataProducts=products
    })
  }
}
