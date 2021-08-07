import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Hero } from '../model/Hero';
import { HeroDto } from '../model/HeroDto';

@Injectable({
  providedIn: 'root',
})
export class HeroServiceService {
  protected url = 'https://superheroapi.com/api/1723667144489691/';
  private heros: HeroDto[];
  respuesta: any;
  constructor(httpClietne: HttpClient) {}

  public getById(id: number): Hero {
    const hero = new Hero();
    axios.get('/api/1723667144489691/' + id).then((h) => {
      hero.id = h.data.id;
      hero.alias = h.data.name;
      hero.nombre = h.data.biography['full-name'];
      hero.peso = h.data.appearance.height[0];
      hero.altura = h.data.appearance.height[1];
      hero.colorCabello = h.data.appearance['hair-color'];
      hero.colorOjos = h.data.appearance['eye-color'];
    });
    return hero;
  }

  public async searchName(name: string) {
    return await axios.get('/api/1723667144489691/search/' + name);
  }
}
