import { Component, Input, Output, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  @Input() @Output() heroAux: Hero;
  @Input() index: number;
  constructor() {}

  ngOnInit(): void {}
}
