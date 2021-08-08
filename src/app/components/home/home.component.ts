import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroDto } from 'src/app/model/HeroDto';
import { Powerstats } from 'src/app/model/Powerstats';
import { HeroServiceService } from 'src/app/services/heroService.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  team: Array<Hero> = [];
  heros: HeroDto[] = [];
  powerstats: Powerstats = {
    combat: 0,
    durability: 0,
    intelligence: 0,
    power: 0,
    speed: 0,
    strength: 0,
  };
  stats: Map<number, string>;
  array: any[] = [];
  constructor(
    private service: HeroServiceService,
    private _teamService: TeamService
  ) {}

  ngOnInit(): void {
    this._teamService.currentDataTeam$.subscribe((data) => {
      if (data) {
        this.team = data;
        if (this.powerstats.combat == 0)
          this.team.forEach((h) => {
            this.powerstats.combat += Number(h.powerstats.combat);
            this.powerstats.durability += Number(h.powerstats.durability);
            this.powerstats.intelligence += Number(h.powerstats.intelligence);
            this.powerstats.power += Number(h.powerstats.power);
            this.powerstats.speed += Number(h.powerstats.speed);
            this.powerstats.strength += Number(h.powerstats.strength);
          });
        var map = new Map();
        map.set(this.powerstats.combat, 'Combat');
        map.set(this.powerstats.durability, 'Durability');
        map.set(this.powerstats.intelligence, 'Intelligence');
        map.set(this.powerstats.power, 'Power');
        map.set(this.powerstats.speed, 'Speed');
        map.set(this.powerstats.strength, 'Strength');
        this.stats = new Map([...map.entries()].sort());
        this.stats.forEach((n, s) => this.array.push(`${n} - ${s} `));
        this.array.sort().reverse();
      }
    });
  }
  cargarMap() {
    var map = new Map();
    map.set(this.powerstats.combat, 'combat');
    map.set(this.powerstats.durability, 'durability');
    map.set(this.powerstats.intelligence, 'intelligence');
    map.set(this.powerstats.power, 'power');
    map.set(this.powerstats.speed, 'speed');
    map.set(this.powerstats.strength, 'strength');
    this.stats = new Map([...map.entries()].sort());
    //this.array = this.stats.values();
    //this.stats.forEach((n, s) => this.array.push(`${s} - ${n}`));
  }
}
