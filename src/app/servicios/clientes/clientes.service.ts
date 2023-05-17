import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  private API_CLIENTES="http://localhost:3000/administrativo"

  getClientes(): Observable <any>{
    return this.http.get(this.API_CLIENTES)
  }
//METODO GUARDAR
postClientes(user:any): Observable<any>{
  return this.http.post(this.API_CLIENTES,user )
}
//METODO PUT/UPDATE
putClientes(user: any, id: string): Observable<any>{
    
  this.API_CLIENTES=`${this.API_CLIENTES}/${id}`
  return this.http.put(this.API_CLIENTES, user)

}
//METODO DELETE
  deleteClientes(id:string) : Observable <any>{
    this.API_CLIENTES=`${this.API_CLIENTES}/${id}`
    return this.http.delete(this.API_CLIENTES)
  }
}
