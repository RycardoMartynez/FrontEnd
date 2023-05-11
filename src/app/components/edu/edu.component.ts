import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/model/Entidades/Curso/curso';
import { CursoService } from 'src/app/service/Curso/curso.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  cur: Curso[] = [];
  tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición

  constructor(private curServi: CursoService) {}

  ngOnInit(): void {
    this.cargarCurso();
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
}
