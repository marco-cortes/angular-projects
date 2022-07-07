import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SaldoComponent } from './saldo/saldo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { OperacionComponent } from './operacion/operacion.component';
import { PresupuestoService } from './presupuesto.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SaldoComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PresupuestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
