import { Component } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  constructor(private servicio:ClientesService){}
 


  guardarCliente(first_name:string, email:string, phone:string, password:string){
    const temp={
      "first_name": first_name,
      "email": email,
      "phone": phone,
      "contraseña":password
    }

    this.servicio.postClientes(temp).subscribe(u =>{})

  }
}
