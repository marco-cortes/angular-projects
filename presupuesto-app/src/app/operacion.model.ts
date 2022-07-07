export class Operacion {
    nombre: string;
    cantidad: number;
    negativo: boolean;

    constructor(nombre: string, cantidad: number, negativo: boolean) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.negativo = negativo;
    }
}
