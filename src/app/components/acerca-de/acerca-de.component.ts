import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: Persona=new Persona(0, '', '', '', '','','');
  modoEdicion: boolean = false;
  loginIN: boolean = false;

  constructor(private personaService: PersonaService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.personaService.verPersona(1).subscribe(persona => {
      this.persona = persona;
      this.modoEdicion = false;
    });
    
    this.loginIN = this.usuarioService.isLoggedIn(); // Obtener el estado de inicio de sesión al cargar el componente
  }

  activarEdicion(): void {
    this.modoEdicion = true;
  }

  desactivarEdicion(): void {
    this.modoEdicion = false;
  }
  
  guardarCambios(): void {
    this.personaService.editar(this.persona).subscribe(
      () => {
        console.log('Datos de la persona actualizados correctamente');
        this.modoEdicion = false; // Desactivar el modo de edición después de guardar los cambios
        window.location.reload();
      },
      (error) => {
        console.error('Error al actualizar los datos de la persona', error);
      }
    );
}
}
