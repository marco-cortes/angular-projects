import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../operacion.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {


  @Input() egresos: Operacion[];
  @Input() ingresoTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
