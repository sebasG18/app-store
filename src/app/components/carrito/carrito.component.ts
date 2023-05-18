import { Component } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  constructor(private servicio: CarritoService, private routert: Router) {

  }

  dataCarrito: any = {};
  ngOnInit() {
    this.servicio.getCarrito().subscribe(carrito => {
      this.dataCarrito = carrito;
    })
  }


  Total(): number {
    let total = 0;
    for (const item of this.dataCarrito) {
      const precio = parseFloat(item.precio);
      if (!isNaN(precio)) {
        total += precio;
      }
    }
    return total;
  }
  eliminarProducto(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteCarrito(ide).subscribe(u => { })
    location.reload();
  }
  vaciarCarrito(id: string) {
    const ide: number = parseInt(id)
    this.servicio.deleteCarrito(ide).subscribe(u => { })
  }

  FinalizarCompra(): void {
    if (this.dataCarrito.length > 0) {
      const ids: number[] = this.dataCarrito.map((item: any) => item.id);
      for (const id of ids) {
        this.vaciarCarrito(id.toString());
      }
      this.routert.navigate(['/home']);
      alert('Compra Exitosa');
    }
  }
}
