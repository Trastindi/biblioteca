import { Service } from "@angular/core";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
}

@Service()
export class LibrosService {
    private readonly libros: Libro[] = [
        { id: 1, titulo: "Blancanieves", autor: "Hermanos Grimm", genero: "Cuento" },
        { id: 2, titulo: "El misterioso caso de Dr. Jerkyll y Mr. Hyde", autor: "Autor 2", genero: "Novela" },
        { id: 3, titulo: "Fabulas de Esopo", autor: "Esopo", genero: "Poema" },
        { id: 4, titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "Novela" },
        { id: 5, titulo: "Rimas y leyendas", autor: "Gustavo Adolfo Bécquer", genero: "Poema" },
    ]

    obtenerTodos(genero?: string): Libro[] {
        return genero
        ? this.libros.filter(libro => libro.genero === genero)
        : this.libros;
    }

    obtenerPorId(id: number): Libro | undefined {
        return this.libros.find((l) => l.id === id);
    }

    idSiguiente(idActual: number) {
        const iindice = this.libros.findIndex((l) => l.id  === idActual);
        return this.libros[(iindice + 1) % this.libros.length].id;
    }
}
