export class Skill {

    id:number;
    nombreS: string;
    porcentaje:number;
    icono:string;

    constructor(id:number, nombreS:string,porcentaje:number, icono:string) {
        this.id = id;
        this.nombreS = nombreS;
        this.porcentaje =porcentaje;
        this.icono = icono;
    }
}
