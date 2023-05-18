import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresGuard implements CanActivate {

  constructor (private ruta: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    const acceso = localStorage.getItem('login')
    if (acceso === 'true') {
      return true
    } else {
      this.ruta.navigate(['/administracion'])
      return false;
    }
  }

}
