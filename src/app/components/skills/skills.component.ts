import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Entidades/Skill/skill';
import { SkillService } from 'src/app/service/Skill/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    skill: Skill[]=[]
    tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición


    constructor(private skillServi: SkillService){}
    
    ngOnInit(): void {
        this.cargarSkill();
    }

    cargarSkill(): void{
        this.skillServi.lista().subscribe(data=>{this.skill=data;}); 
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
    
      guardarCambios(skill: Skill): void {
        this.skillServi.editar(skill.id, skill).subscribe(
          () => {
            console.log('Cambios guardados exitosamente');
            this.cancelarEdicion(skill.id); // Cancela la edición de la tarjeta después de guardar los cambios
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
