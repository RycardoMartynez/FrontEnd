import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Entidades/Curso/curso';
import { CursoService } from 'src/app/service/Curso/curso.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  cur: Curso[] = [];
  tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición
  nuevoCurso: Curso = new Curso(0, '', '', '', '', '', '');
  mostrarForm: boolean = false;
  loginIN: boolean = false;

  constructor(private curServi: CursoService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarCurso();
    this.loginIN = this.usuarioService.isLoggedIn(); // Obtener el estado de inicio de sesión al cargar el componente

  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
 }

 cancelarAgregar(): void {
  this.mostrarForm = false;
  
  if (this.nuevoCurso.id === 0 && this.nuevoCurso.nombreC === '' && this.nuevoCurso.imgC === '' &&
      this.nuevoCurso.descripcionC === '' && this.nuevoCurso.tituloC === '' && this.nuevoCurso.conocimientosC === '' &&
      this.nuevoCurso.fechaC === '') {
    this.nuevoCurso = new Curso(0, '', '', '', '', '', '');
  }
}


  cargarCurso(): void {
    this.curServi.lista().subscribe(data => {this.cur = data;});
  }

  editarTarjeta(cursoId: number): void {
    if (!this.tarjetaEnEdicion(cursoId)) {
      this.tarjetasEnEdicion.push(cursoId); // Agrega el identificador de la tarjeta al array de edición
    }
  }

  cancelarEdicion(cursoId: number): void {
    const index = this.tarjetasEnEdicion.indexOf(cursoId);
    if (index !== -1) {
      this.tarjetasEnEdicion.splice(index, 1); // Elimina el identificador de la tarjeta del array de edición
    }
  }

  guardarCambios(curso: Curso): void {
    this.curServi.editar(curso.id, curso).subscribe(
      () => {
        console.log('Cambios guardados exitosamente');
        this.cancelarEdicion(curso.id); // Cancela la edición de la tarjeta después de guardar los cambios
      },
      (error) => {
        console.error('Error al guardar los cambios', error);
      }
    );
  }

  tarjetaEnEdicion(cursoId: number): boolean {
    return this.tarjetasEnEdicion.includes(cursoId);
  }
  crearCurso(): void {
    this.curServi.crear(this.nuevoCurso).subscribe(
      () => {
        console.log('Curso creado exitosamente');
        this.nuevoCurso = new Curso(0, '', '', '', '', '', ''); // Limpiar los campos del formulario después de la creación exitosa
        this.cargarCurso(); // Volver a cargar la lista de experiencias actualizada
        
        
      },
      (error) => {
       
        console.error('Error al crear la experiencia', error);
        
      }
    );
}
      eliminarCurso(id: number): void {
        if (confirm('¿Estás seguro de eliminar esta experiencia?')) {
          this.curServi.borrar(id).subscribe(
            () => {
              console.log('Experiencia eliminada exitosamente');
              this.cargarCurso(); // Vuelve a cargar la lista de experiencias después de eliminar una
              
            },
            (error) => {
              console.error('Error al eliminar la experiencia', error);
            }
          );
        }
      }


}
