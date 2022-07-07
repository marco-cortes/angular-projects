import { Component, OnInit } from '@angular/core';
import { Operacion } from '../operacion.model';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  negativo: string = "0";
  cantidad: number = 0;
  nombre: string = "";

  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit(): void {

  }

  agregar() {
    if (this.negativo === "0") {
      this.presupuestoService.agregarIngreso(new Operacion(this.nombre, this.cantidad, false));

    } else {
      this.presupuestoService.agregarEgreso(new Operacion(this.nombre, this.cantidad, true));
    }
  }

}
