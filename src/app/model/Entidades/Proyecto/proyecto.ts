export class Proyecto {

    id:number;
    nombreP:String;
    descripcion:String;
    tecnologia:String;
    img:string;
    link:string;

    constructor( id:number, nombreP:String, descripcion:String, tecnologia:String, img:string, link:string) {
            this.id = id;    
            this.nombreP = nombreP;
            this.descripcion = descripcion;
            this.tecnologia = tecnologia;
            this.img = img;
            this.link = link;
    }
}
