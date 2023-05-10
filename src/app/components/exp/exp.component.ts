import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Entidades/Experiencia/experiencia';
import { ExperienciaService } from 'src/app/service/Experiencia/experiencia.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

    expe: Experiencia[]=[];
    
    constructor(private expeServi: ExperienciaService){}
    
    ngOnInit(): void {
        this.cargarExperiencia();
    }

    cargarExperiencia(): void{
        this.expeServi.lista().subscribe(data=>{this.expe=data;}); 
    }


}
