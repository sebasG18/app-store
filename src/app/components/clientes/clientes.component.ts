import { Component } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private servicio:ClientesService){}
 


  guardarCliente(id:string, first_name:string, email:string, phone:string){
    const temp={
      "id": id,
      "first_name": first_name,
      "email": email,
      "phone": phone
    }

    this.servicio.postClientes(temp).subscribe(u =>{})
    location.reload();

  }

  actualizarProductos(id:string, first_name:string, email:string, phone:string){
    const temp={
      "id": id,
      "first_name": first_name,
      "email": email,
      "phone": phone
    }

    this.servicio.putClientes(temp, id).subscribe(u=>{})
    location.reload();
  }


  eliminarCliente(id: string){
    this.servicio.deleteClientes(id).subscribe(u=>{})
    location.reload();

    }
  dataClientes:any={};
  ngOnInit(){
    this.servicio.getClientes().subscribe(clientes => {
      this.dataClientes=clientes;
      

    })
  }
}
