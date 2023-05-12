import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/Entidades/Persona/persona';
import { PersonaService } from 'src/app/service/Persona/persona.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  persona: Persona = new Persona(0, '', '', '', '');
  loginIN: boolean = false;
  nombreU: string = "";
  contrasena: string = "";
  mostrarForm: boolean = false;

  constructor(private persoService: PersonaService, private usuarioService: UsuarioService,) { }

  ngOnInit(): void {
    this.persoService.verPersona(1).subscribe(persona => {
      this.persona = persona;
      this.checkLoginStatus(); // Verificar el estado de inicio de sesión al cargar la página
    });
 
  }

  logout(): void {
    this.loginIN = false;
    this.usuarioService.setLoggedIn(false); // Guardar el estado de inicio de sesión en el servicio
    window.location.reload();
  }

  login() {
    this.usuarioService.login(this.nombreU, this.contrasena).subscribe(
      (resultado) => {
        if (resultado) {
          // Inicio de sesión exitoso
          this.loginIN = true; // Habilitar los botones que deseas
          this.usuarioService.setLoggedIn(true); // Guardar el estado de inicio de sesión en el servicio
          this.checkLoginStatus();
          window.location.reload();
          
        } else {
          // Inicio de sesión fallido
          // Maneja el caso de inicio de sesión fallido, muestra un mensaje de error, etc.
        }
      },
      (error) => {
        // Maneja el error de la llamada al servicio
      }
    );
  }

  private checkLoginStatus() {
    this.loginIN = this.usuarioService.isLoggedIn(); // Verificar el estado de inicio de sesión en el servicio
  }
  mostrarFormulario(): void {
    this.mostrarForm = true;
 }
 cerrarFormulario(): void {
  this.mostrarForm = false;
}
}
