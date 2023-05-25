import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  persona: Persona=new Persona(0, '', '', '', '','','');

constructor(private personaService: PersonaService ){}

ngOnInit(): void {
  this.personaService.verPersona(1).subscribe(persona => {
  this.persona = persona;});}

}
