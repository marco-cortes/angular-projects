import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  @Input() total: number = 0;
  @Input() ingreso: number = 0;
  @Input() egreso: number = 0;
  @Input() porcentaje: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }
}
