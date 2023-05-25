import { Component, OnInit } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginIN: boolean = false;
  nombreU: string = "";
  contrasena: string = "";
  mostrarForm: boolean = false;
  constructor(private usuarioService: UsuarioService, private pageScrollService: PageScrollService) { }

  ngOnInit(): void {
     this.checkLoginStatus(); // Verificar el estado de inicio de sesión al cargar la página
   
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

scrollToSection(sectionId: string, event: Event) {
  event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


}