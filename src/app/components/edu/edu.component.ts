import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Entidades/Curso/curso';
import { CursoService } from 'src/app/service/Curso/curso.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit{

  cur : Curso[]=[];
  
  constructor(private curServi: CursoService){}
    
    ngOnInit(): void {
        this.cargarCurso();
    }

    cargarCurso(): void{
        this.curServi.lista().subscribe(data=>{this.cur=data;}); 
    }
}
