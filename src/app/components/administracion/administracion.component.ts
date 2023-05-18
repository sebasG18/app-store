import { Component } from '@angular/core';
import { AdministracionService } from 'src/app/servicios/administracion/administracion.service';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent {
  constructor(private servicio: AdministracionService){}
  user:string=""
  pass:string=""
  guardarJSON(){
    const temp={
      user: this.user,
      pass: this.pass
    }
    return temp;
  }
  ngOnInit(){
this.servicio.getAdministracion().subscribe(n =>{


})

  }
  login(){
    const aux= this.guardarJSON()
    this.servicio.getAdministracion().subscribe(p=>{
      for(const doc of p ){
        if(JSON.stringify(doc) == JSON.stringify(aux)){
          console.log("Verificado")
          localStorage.setItem('login', 'true')
          break;
        }else{
          localStorage.setItem('login', 'false')
        }
        
      }
    })
  }
}
