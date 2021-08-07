import { Powerstats } from './Powerstats';

export class HeroDto {
  id: number;
  nombre: string;
  imagen: string;
  powerstats: Powerstats;

  constructor(
    id: number,
    nombre: string,
    imagen: string,
    powerstats: Powerstats
  ) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.powerstats = powerstats;
  }
}
