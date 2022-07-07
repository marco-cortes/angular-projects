import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../operacion.model';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  @Input() operacion: Operacion;
  @Input() i: number;
  @Input() ingresoTotal: number;

  constructor(private presupuestoService: PresupuestoService) {
  }

  ngOnInit(): void {
    /*if (this.operacion.negativo) {
      this.operacion.porcentaje = Math.trunc((100 * this.operacion.cantidad / this.presupuestoService.saldo.ingreso));
    }*/
  }

  eliminar(operacion: Operacion) {
    if(operacion.negativo) {
      this.presupuestoService.eliminarEgreso(operacion);
    } else {
      this.presupuestoService.eliminarIngreso(operacion);
    }
  }

  porcentaje() {
    return this.operacion.cantidad / this.ingresoTotal;
  }

}
