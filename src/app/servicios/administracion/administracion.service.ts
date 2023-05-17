import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  constructor( private http:HttpClient) { }
  private API_ADMINISTRACION="http://localhost:3000/login"
  getAdministracion():Observable<any>{
return this.http.get(this.API_ADMINISTRACION)
  }
}
