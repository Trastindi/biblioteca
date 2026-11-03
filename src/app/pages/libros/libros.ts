import { Component, inject, computed, input } from '@angular/core';
import { LibrosService } from '../../libros.service';

import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-libros',
  styleUrl: './libros.css',
  templateUrl: './libros.html',
})
export class Libros {
  private servicio = inject(LibrosService);

  tipo = input<string>();

  lista = computed( () => this.servicio.obtenerTodos( this.tipo()));
}
