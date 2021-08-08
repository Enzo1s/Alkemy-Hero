import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  public heros: Array<Hero>;
  public cantidad: number = 0;
  constructor(private _teamService: TeamService) {}

  ngOnInit(): void {
    this._teamService.currentDataTeam$.subscribe((data) => {
      if (data) {
        this.heros = data;
        this.cantidad = data.length;
        /* Agregar suma de stats */
      }
    });
  }

  public remove(hero: Hero) {
    this._teamService.removeEmenetTeam(hero);
  }
}
