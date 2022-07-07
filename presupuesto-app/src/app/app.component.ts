import { Component } from '@angular/core';
import { Operacion } from './operacion.model';
import { PresupuestoService } from './presupuesto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Operacion[] = [];
  egresos: Operacion[] = [];

  constructor(private presupuestoService: PresupuestoService) {
    this.ingresos = presupuestoService.ingresos;
    this.egresos = presupuestoService.egresos;
  }

  totalIngresos() {
    return this.ingresos.map(item => item.cantidad).reduce((previo, actual) => previo + actual, 0);
  }

  totalEgresos() {
    return this.egresos.map(item => item.cantidad).reduce((previo, actual) => previo + actual, 0);
  }

  total() {
    return this.totalIngresos() - this.totalEgresos (); 
  }

  porcentaje() {
    return this.totalEgresos() / this.totalIngresos();
  }
}
