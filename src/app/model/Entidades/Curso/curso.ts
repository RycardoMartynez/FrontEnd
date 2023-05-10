export class Curso {
    id?: Number;
    nombreC: String;
    imgC: String;
    descripcionC: String;
    tituloC: String;
    conocimientosC: String;
    fechaC: String;

    constructor(nombreC: String, imgC: String,descripcionC: String,tituloC: String, conocimientosC: String, fechaC: String){
        this.nombreC = nombreC;
        this.imgC = imgC;
        this.descripcionC = descripcionC;
        this.tituloC = tituloC;
        this.conocimientosC = conocimientosC;
        this.fechaC = fechaC;
    }
}
