import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroDto } from 'src/app/model/HeroDto';
import { HeroServiceService } from 'src/app/services/heroService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  team: Hero[] = [];
  heros: HeroDto[] = [];
  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {}

  search() {
    var result: any[];
    this.service.searchName('batman').then((res) => {
      result = res.data.results;
      result.forEach((h) =>
        this.heros.push(new HeroDto(h.id, h.name, h.image.url, h.powerstats))
      );
    });
    console.log(this.heros);
  }

  buscar() {
    var hero = this.service.getById(1);
    this.team.push(hero);
  }
}
