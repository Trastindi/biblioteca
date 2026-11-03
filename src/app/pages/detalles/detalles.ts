import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { LibrosService } from '../../libros.service';

@Component({
  imports: [],
  selector: 'app-detalles',
  styleUrl: './detalles.css',
  templateUrl: './detalles.html',
})

export class Detalles {
  private servicio = inject(LibrosService);
  private router = inject(Router);

  id = input();
  
  libro = computed(() => this.servicio.obtenerPorId(Number(this.id())));
  siguiente(idActual: number) {
    const idSiguiente = this.servicio.idSiguiente(idActual);
    this.router.navigate(['/libros', idSiguiente]);
  }
}
