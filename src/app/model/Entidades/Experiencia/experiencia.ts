export class Experiencia {

    id?: number;
    nombreE: String;
    imgE: String;
    descripcionE: String;
    puestoE:String;
    tareasE:String;
    fechaE: String;

   
    constructor(nombreE:String, imgE: String, descripcionE: String, puestoE: String, tareasE: String, fechaE:String) {
        this.nombreE = nombreE;
        this.imgE = imgE;
        this.descripcionE = descripcionE;
        this.puestoE = puestoE;
        this.tareasE = tareasE;
        this.fechaE = fechaE;
    }
}
