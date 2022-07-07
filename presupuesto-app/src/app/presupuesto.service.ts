import { Operacion } from './operacion.model';

export class PresupuestoService {

    ingresos: Operacion[] = [new Operacion("Salario", 2100.5, false), new Operacion("Venta de coche", 1500.5, false)];
    egresos: Operacion[] = [new Operacion("Renta de departamento", 764.50, true), new Operacion("Ropa", 435.50, true)];

    agregarIngreso(ingreso: Operacion) {
        this.ingresos.push(ingreso);
    }

    agregarEgreso(egreso: Operacion) {
        this.egresos.push(egreso);
    }

    eliminarIngreso(ingreso: Operacion) {
        this.ingresos.splice(this.ingresos.indexOf(ingreso), 1);
    }

    eliminarEgreso(egreso: Operacion) {
        this.egresos.splice(this.ingresos.indexOf(egreso), 1);
    }
}