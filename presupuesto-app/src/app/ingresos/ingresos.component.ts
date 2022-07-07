import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../operacion.model';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  
  @Input() ingresos: Operacion[];

  constructor() { }

  ngOnInit(): void {
  }

}
