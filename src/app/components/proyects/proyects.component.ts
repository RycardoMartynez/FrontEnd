import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/Entidades/Proyecto/proyecto';
import { ProyectoService } from 'src/app/service/Proyecto/proyecto.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

    proyecto: Proyecto[]=[]
    tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición
    nuevoProyecto: Proyecto = new Proyecto(0, '','','','','');
    mostrarForm: boolean = false;


    constructor(private proyeServi:ProyectoService){}
    
    ngOnInit(): void {
        this.cargarProyecto();
    }

    cargarProyecto(): void{
        this.proyeServi.lista().subscribe(data=>{this.proyecto=data;}); 
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
    
      guardarCambios(proyecto: Proyecto): void {
        this.proyeServi.editar(proyecto.id, proyecto).subscribe(
          () => {
            console.log('Cambios guardados exitosamente');
            this.cancelarEdicion(proyecto.id); // Cancela la edición de la tarjeta después de guardar los cambios
          },
          (error) => {
            console.error('Error al guardar los cambios', error);
          }
        );
      }
    
      tarjetaEnEdicion(tarjetaId: number): boolean {
        return this.tarjetasEnEdicion.includes(tarjetaId);
      }

      mostrarFormulario(): void {
        this.mostrarForm = true;
     }
  
     cancelarAgregar(): void {
      this.mostrarForm = false;
      
      if (this.nuevoProyecto.id === 0 && this.nuevoProyecto.nombreP === '' && this.nuevoProyecto.descripcion === '' && this.nuevoProyecto.tecnologia === '' && this.nuevoProyecto.img === '' && this.nuevoProyecto.link ==='') {
        this.nuevoProyecto = new Proyecto(0, '', '','','','');
      }
    }
    crearProyecto(): void {
      this.proyeServi.crear(this.nuevoProyecto).subscribe(
        () => {
          console.log('Proyecto creado exitosamente');
          this.nuevoProyecto = new Proyecto(0, '', '','','',''); // Limpiar los campos del formulario después de la creación exitosa
          this.cargarProyecto(); // Volver a cargar la lista de experiencias actualizada
          
          
        },
        (error) => {
         
          console.error('Error al crear la experiencia', error);
          
        }
      );
}
        eliminarProyecto(id: number): void {
          if (confirm('¿Estás seguro de eliminar esta experiencia?')) {
            this.proyeServi.borrar(id).subscribe(
              () => {
                console.log('Skill eliminado exitosamente');
                this.cargarProyecto(); // Vuelve a cargar la lista de experiencias después de eliminar una
                
              },
              (error) => {
                console.error('Error al eliminar la experiencia', error);
              }
            );
          }
        }




}
