import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Libros } from './pages/libros/libros';
import { Autores } from './pages/autores/autores';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'libros', component: Libros },
  { path: 'autores', component: Autores },
  { path: '**', component: NoEncontrado },
];