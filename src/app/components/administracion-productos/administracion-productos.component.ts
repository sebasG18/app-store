import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-administracion-productos',
  templateUrl: './administracion-productos.component.html',
  styleUrls: ['./administracion-productos.component.css']
})
export class AdministracionProductosComponent {
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
    location.reload();

  }

  actualizarProductos(id:string, nombre:string, precio:string, image:string){
    const temp={
      "id": id,
      "nombre": nombre,
      "precio": precio,
      "image": image
    }

    this.servicio.putProductos(temp, id).subscribe(u=>{})
    location.reload();
  }


  eliminarProductos(id: string){
    this.servicio.deleteProductos(id).subscribe(u=>{})
    location.reload();
     

    }
  dataProductos:any={};
  ngOnInit(){
    this.servicio.getProcutos().subscribe(products => {
      this.dataProducts=products
    })
  }
}
