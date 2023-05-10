export class Proyecto {

    id?:number
    nombreP:String;
    descripcion:String;
    tecnologia:String;
    img:string;
    link:string;

    constructor(nombreP:String, descripcion:String, tecnologia:String, img:string, link:string) {
            this.nombreP = nombreP;
            this.descripcion = descripcion;
            this.tecnologia = tecnologia;
            this.img = img;
            this.link = link;
    }
}
