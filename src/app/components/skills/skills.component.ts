import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/Entidades/Skill/skill';
import { SkillService } from 'src/app/service/Skill/skill.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    skill: Skill[]=[]
    tarjetasEnEdicion: number[] = []; // Array de identificadores de tarjetas en modo de edición
    nuevoSkill: Skill = new Skill(0, '',0,'');
    mostrarForm: boolean = false;
    loginIN: boolean = false;

    constructor(private skillServi: SkillService,  private usuarioService: UsuarioService){}
    
    ngOnInit(): void {
        this.cargarSkill();
        this.loginIN = this.usuarioService.isLoggedIn(); // Obtener el estado de inicio de sesión al cargar el componente

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
      mostrarFormulario(): void {
        this.mostrarForm = true;
     }
  
     cancelarAgregar(): void {
      this.mostrarForm = false;
      
      if (this.nuevoSkill.id === 0 && this.nuevoSkill.nombreS === '' && this.nuevoSkill.porcentaje === 0) {
        this.nuevoSkill = new Skill(0, '', 0,'');
      }
    }
    crearSkill(): void {
      this.skillServi.crear(this.nuevoSkill).subscribe(
        () => {
          console.log('Skill creado exitosamente');
          this.nuevoSkill = new Skill(0, '', 0,''); // Limpiar los campos del formulario después de la creación exitosa
          this.cargarSkill(); // Volver a cargar la lista de experiencias actualizada
          
          
        },
        (error) => {
         
          console.error('Error al crear la experiencia', error);
          
        }
      );
}
        eliminarSkill(id: number): void {
          if (confirm('¿Estás seguro de eliminar esta experiencia?')) {
            this.skillServi.borrar(id).subscribe(
              () => {
                console.log('Skill eliminado exitosamente');
                this.cargarSkill(); // Vuelve a cargar la lista de experiencias después de eliminar una
                
              },
              (error) => {
                console.error('Error al eliminar la experiencia', error);
              }
            );
          }
        }


}
