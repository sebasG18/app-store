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

postClientes(user:any): Observable<any>{
  return this.http.post(this.API_CLIENTES,user )
}
}
