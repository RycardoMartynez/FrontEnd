import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona=new Persona(0, '', '', '', '');

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.verPersona(1).subscribe(persona => {
      this.persona = persona;
    });
  }
}





