import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Entidades/Proyecto/proyecto';
import { ProyectoService } from 'src/app/service/Proyecto/proyecto.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

    proyecto: Proyecto[]=[]
    constructor(private proyeServi:ProyectoService){}
    
    ngOnInit(): void {
        this.cargarProyecto();
    }

    cargarProyecto(): void{
        this.proyeServi.lista().subscribe(data=>{this.proyecto=data;}); 
    }


}
