import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Entidades/Experiencia/experiencia';
import { ExperienciaService } from 'src/app/service/Experiencia/experiencia.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

    expe: Experiencia[]=[];
    tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición
    
    constructor(private expeServi: ExperienciaService){}
    
    ngOnInit(): void {
        this.cargarExperiencia();
    }

    cargarExperiencia(): void{
        this.expeServi.lista().subscribe(data=>{this.expe=data;}); 
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
}
