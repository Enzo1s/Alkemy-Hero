import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/Hero';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private team = new BehaviorSubject<Array<Hero>>(null);
  public currentDataTeam$ = this.team.asObservable();
  constructor() {}

  public changeTeam(newHero: Hero) {
    let listTeam = this.team.getValue();
    if (listTeam) {
      let objIndex = listTeam.findIndex((obj) => obj.id == newHero.id);
      if (objIndex != -1) {
        alert('El heroe ya se encuenra en el equipo');
      } else {
        listTeam.push(newHero);
      }
    } else {
      listTeam = [];
      listTeam.push(newHero);
    }
    this.team.next(listTeam);
  }

  public removeEmenetTeam(newHero: Hero) {
    let listTeam = this.team.getValue();
    let objIndex = listTeam.findIndex((obj) => obj.id == newHero.id);
    if (objIndex != -1) {
      listTeam.splice(objIndex, 1);
    }
    this.team.next(listTeam);
  }
}
