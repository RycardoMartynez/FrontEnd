import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Entidades/Experiencia/experiencia';
import { ExperienciaService } from 'src/app/service/Experiencia/experiencia.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

    expe: Experiencia[]=[];
    tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición
    nuevaExperiencia: Experiencia = new Experiencia(0, '', '', '', '', '', '');
    mostrarForm: boolean = false;
    loginIN: boolean = false;



    constructor(private expeServi: ExperienciaService, private usuarioService: UsuarioService){}

    
    ngOnInit(): void {
        this.cargarExperiencia();
        this.loginIN = this.usuarioService.isLoggedIn(); // Obtener el estado de inicio de sesión al cargar el componente

    }

    cargarExperiencia(): void {
      this.expeServi.lista().subscribe({
        next: (data) => {
          this.expe = data;
        },
        error: (error) => {
          console.error('Error al cargar las experiencias', error);
        }
      });
    }
    mostrarFormulario(): void {
      this.mostrarForm = true;
   }

   cancelarAgregar(): void {
    this.mostrarForm = false;
    
    if (this.nuevaExperiencia.id === 0 && this.nuevaExperiencia.nombreE === '' && this.nuevaExperiencia.imgE === '' &&
        this.nuevaExperiencia.descripcionE === '' && this.nuevaExperiencia.puestoE === '' && this.nuevaExperiencia.tareasE === '' &&
        this.nuevaExperiencia.fechaE === '') {
      this.nuevaExperiencia = new Experiencia(0, '', '', '', '', '', '');
    }
  }

    editarTarjeta(tarjetaId: number): void {
        if (!this.tarjetaEnEdicion(tarjetaId)) {
          this.tarjetasEnEdicion.push(tarjetaId); // Agrega el identificador de la tarjeta al array de edición
        }
      }
    
      cancelarEdicion(tarjetaId: number): void {
        const index = this.tarjetasEnEdicion.indexOf(tarjetaId);
        if (index !== -1) {
          this.tarjetasEnEdicion.splice(index, 1); // Elimina el identificador de la tarjeta del array de edición
        }
      }
    
      guardarCambios(experiencia: Experiencia): void {
        this.expeServi.editar(experiencia.id, experiencia).subscribe(
          () => {
            console.log('Cambios guardados exitosamente');
            this.cancelarEdicion(experiencia.id); // Cancela la edición de la tarjeta después de guardar los cambios
          },
          (error) => {
            console.error('Error al guardar los cambios', error);
          }
        );
      }
    
      tarjetaEnEdicion(tarjetaId: number): boolean {
        return this.tarjetasEnEdicion.includes(tarjetaId);
      }
      crearExperiencia(): void {
        this.expeServi.crear(this.nuevaExperiencia).subscribe(
          () => {
            console.log('Experiencia creada exitosamente');
            this.nuevaExperiencia = new Experiencia(0, '', '', '', '', '', ''); // Limpiar los campos del formulario después de la creación exitosa
            this.cargarExperiencia(); // Volver a cargar la lista de experiencias actualizada
            
            
          },
          (error) => {
           
            console.error('Error al crear la experiencia', error);
            
          }
        );
}
          eliminarExperiencia(id: number): void {
            if (confirm('¿Estás seguro de eliminar esta experiencia?')) {
              this.expeServi.borrar(id).subscribe(
                () => {
                  console.log('Experiencia eliminada exitosamente');
                  this.cargarExperiencia(); // Vuelve a cargar la lista de experiencias después de eliminar una
                  
                },
                (error) => {
                  console.error('Error al eliminar la experiencia', error);
                }
              );
            }
          }
}
