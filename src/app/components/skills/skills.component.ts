import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Entidades/Skill/skill';
import { SkillService } from 'src/app/service/Skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    skill: Skill[]=[]
    constructor(private skillServi: SkillService){}
    
    ngOnInit(): void {
        this.cargarSkill();
    }

    cargarSkill(): void{
        this.skillServi.lista().subscribe(data=>{this.skill=data;}); 
    }


}
