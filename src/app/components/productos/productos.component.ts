import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { ProductosService } from 'src/app/servicios/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(private servicioP: ProductosService, private servicioC:CarritoService, private router:Router){}
  dataProducts: any;

  guardarProductos(id:string, nombre:string, precio:string, image:string){
    const temp={
      "id": id,
      "nombre": nombre,
      "precio": precio,
      "image": image
    }

    this.servicioP.postProductos(temp).subscribe(u =>{})

  }

  actualizarProductos(id:string, nombre:string, precio:string, image:string){
    const temp={
      "id": id,
      "nombre": nombre,
      "precio": precio,
      "image": image
    }

    this.servicioP.putProductos(temp, id).subscribe(u=>{})
  }


  eliminarProductos(id: string){
    this.servicioP.deleteProductos(id).subscribe(u=>{})
     

    }
  dataProductos:any={};
  ngOnInit(){
    this.servicioP.getProcutos().subscribe(products => {
      this.dataProducts=products
    })
  }
  guardarCarrito(id: string, nombre: string, precio: string) {
    const temp = {
      "id": id,
      "nombre": nombre,
      "precio": precio,
    }

    this.servicioC.postCarrito(temp).subscribe(u => { })

    this.router.navigate(['/carrito']);

  }
}
