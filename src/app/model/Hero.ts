import { Powerstats } from './Powerstats';

export class Hero {
  id!: number;
  nombre!: string;
  alias!: string;
  powerstats: Powerstats;
  imagen: string;
  orientacion: string;
  apariencia: {
    'eye-color': string;
    'hair-color': string;
    height: string[];
    weight: string[];
  };
  lugarTrabajo!: {
    base: string;
    occupation: string;
  };

  constructor(
    id: number,
    nombre: string,
    alias: string,
    powerstats: Powerstats,
    imagen: string,
    orientacion: string,
    apariencia: any,
    lugarTrabajo: any
  ) {
    this.id = id;
    this.nombre = nombre;
    this.alias = alias;
    this.powerstats = powerstats;
    this.imagen = imagen;
    this.orientacion = orientacion;
    this.apariencia = apariencia;
    this.lugarTrabajo = lugarTrabajo;
  }
}
