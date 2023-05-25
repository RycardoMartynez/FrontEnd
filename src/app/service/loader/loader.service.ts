import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false); // Variable de estado inicializada en "false"


  constructor() { }

   // Método para mostrar el "loader"
   showLoader() {
    this.isLoading.next(true);
  }

  // Método para ocultar el "loader"
  hideLoader() {
    this.isLoading.next(false);
  }

  // Método para obtener el estado actual del "loader"
  getLoaderState() {
    return this.isLoading.asObservable();
  }
}

