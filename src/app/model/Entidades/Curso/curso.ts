export class Curso {
    id: number;
    nombreC: String;
    imgC: String;
    descripcionC: String;
    tituloC: String;
    conocimientosC: String;
    fechaC: String;
    


    constructor(id: number, nombreC: String, imgC: String,descripcionC: String,tituloC: String, conocimientosC: String, fechaC: String) {
        this.id = id;
        this.nombreC = nombreC;
        this.imgC = imgC;
        this.descripcionC = descripcionC;
        this.tituloC = tituloC;
        this.conocimientosC = conocimientosC;
        this.fechaC = fechaC;
        

    }
}
