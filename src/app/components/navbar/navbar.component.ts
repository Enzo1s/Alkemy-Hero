import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  team: Array<Hero> = [];
  constructor(private _teamService: TeamService) {}

  ngOnInit(): void {
    this._teamService.currentDataTeam$.subscribe((data) => {
      if (data) {
        this.team = data;
      }
    });
  }
}
