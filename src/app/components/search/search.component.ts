import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroDto } from 'src/app/model/HeroDto';
import { HeroServiceService } from 'src/app/services/heroService.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public heroRes: Hero[] = [];
  public nombre: string;
  public resultado: string = '';
  public team: Array<Hero> = [];
  constructor(
    private service: HeroServiceService,
    private _teamService: TeamService
  ) {}

  ngOnInit(): void {
    this._teamService.currentDataTeam$.subscribe((data) => {
      if (data) {
        this.team = data;
      }
    });
  }

  search() {
    var result: any[];
    if (this.heroRes.length != 0) {
      this.heroRes = [];
    }
    this.service.searchName(this.nombre).then((res) => {
      result = res.data.results;
      console.log(result);
      if (res.data.response != 'error') {
        var hero: Hero;
        result.forEach((h) => {
          this.heroRes.push(
            new Hero(
              h.id,
              h.name,
              h.biography['full-name'],
              h.powerstats,
              h.image.url,
              h.biography.alignment,
              h.appearance,
              h.work
            )
          );
        });
      }
      this.resultado =
        this.heroRes.length != 0
          ? `Los resultados para ${this.nombre} son:`
          : `No se encontraron resultados para ${this.nombre}, pruebe con otra búsqueda`;
    });
  }

  agregar(hero: Hero) {
    var bad = 0;
    var good = 0;
    if (this.team.length < 6) {
      this.team.forEach((h) => (h.orientacion == 'bad' ? bad++ : good++));
      if (
        (hero.orientacion == 'bad' && bad < 3) ||
        (hero.orientacion == 'good' && good < 3)
      ) {
        this._teamService.changeTeam(hero);
        alert('Personaje agregado');
      } else {
        alert('No puede tener más de 3 integrates de la misma orientación');
      }
    } else {
      alert('No puede agregar más integrantes, elimine uno');
    }
  }
}
