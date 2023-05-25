import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';
import { LoaderService } from 'src/app/service/loader/loader.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  persona: Persona=new Persona(0, '', '', '', '','','');

   constructor(private personaService: PersonaService, public loaderService: LoaderService)  { }

  ngOnInit(): void {
    this.personaService.verPersona(1).subscribe(persona => {
      this.persona = persona;});
  }

  enviarCorreo() {
    const destinatario = 'RicardoMartinez@RyckDev.com'; // Cambia esto con la dirección de correo electrónico a la que deseas enviar el correo
    const asunto = 'Contacto'; // Cambia esto con el asunto del correo
    const cuerpo = ''; // Cambia esto con el contenido del correo
  
    const url = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  
    window.open(url);
  }

  enviarWhatsApp() {
    const numeroTelefono = '+5492223438434'; 
    const mensaje = 'Hola Ricardo me comunico por el siguiente motivo:'; 
    
  
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;  
    window.open(url);
  }
 


}
