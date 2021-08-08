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
    var hero;
    axios.get('/api/1723667144489691/' + id).then((h) => {
      hero = new Hero(
        h.data.id,
        h.data.name,
        h.data.biography['full-name'],
        h.data.powerstats,
        h.data.image.url,
        h.data.biography.alignment,
        h.data.appearance,
        h.data.work
      );
    });
    return hero;
  }

  public async searchName(name: string) {
    return await axios.get('/api/1723667144489691/search/' + name);
  }
}
