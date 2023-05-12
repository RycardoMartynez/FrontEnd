import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona: Persona=new Persona(0, '', '', '', '','','');
  

  constructor(private persoService: PersonaService) { }

  ngOnInit(): void {
    this.persoService.verPersona(1).subscribe(persona => {
      this.persona = persona;
     
    });

  }


}
