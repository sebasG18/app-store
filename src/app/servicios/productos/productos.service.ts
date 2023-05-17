import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {}

  private API_PRODUCTOS='http://localhost:3000/Inventario'
  getProcutos(): Observable<any> {
    return this.http.get(this.API_PRODUCTOS)
 }
 postProductos(user: any): Observable<any>{
  return this.http.post(this.API_PRODUCTOS, user)
}
//METODO PUT/UPDATE
putProductos(user: any, id: string): Observable<any>{
    
  this.API_PRODUCTOS=`${this.API_PRODUCTOS}/${id}`
  return this.http.put(this.API_PRODUCTOS, user)

}
//METODO DELETE
  deleteProductos(id:string) : Observable <any>{
    this.API_PRODUCTOS=`${this.API_PRODUCTOS}/${id}`
    return this.http.delete(this.API_PRODUCTOS)
  }
}
