import { Component, Input, Output, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { Powerstats } from 'src/app/model/Powerstats';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() @Output() heroAux: Hero;
  @Input() index: number;
  @Input() @Output() powerstats: Powerstats;
  @Input() @Output() team: Hero[];
  constructor(private _teamService: TeamService) {}

  ngOnInit(): void {}

  public eliminar(hero: Hero) {
    this._teamService.removeEmenetTeam(hero);
    this.powerstats.combat -= Number(this.heroAux.powerstats.combat);
    this.powerstats.durability -= Number(this.heroAux.powerstats.durability);
    this.powerstats.intelligence -= Number(
      this.heroAux.powerstats.intelligence
    );
    this.powerstats.power -= Number(this.heroAux.powerstats.power);
    this.powerstats.speed -= Number(this.heroAux.powerstats.speed);
    this.powerstats.strength -= Number(this.heroAux.powerstats.strength);
  }
}
