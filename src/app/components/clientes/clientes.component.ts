import { Component } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private servicio:ClientesService){

  }
  dataClientes:any={};
  ngOnInit(){
    this.servicio.getClientes().subscribe(clientes => {
      this.dataClientes=clientes;
    })
  }
}
