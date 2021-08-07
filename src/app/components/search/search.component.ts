import { Component, OnInit } from '@angular/core';
import { HeroDto } from 'src/app/model/HeroDto';
import { HeroServiceService } from 'src/app/services/heroService.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public heroRes: HeroDto[] = [];
  public nombre: string;
  public resultado: string = '';
  constructor(private service: HeroServiceService) {}

  ngOnInit(): void {}

  search() {
    var result: any[];
    if (this.heroRes.length != 0) {
      this.heroRes = [];
    }
    this.service.searchName(this.nombre).then((res) => {
      result = res.data.results;
      if (result.length != 0) {
        this.resultado = `Los resultados para ${this.nombre} son:`;
        result.forEach((h) =>
          this.heroRes.push(
            new HeroDto(h.id, h.name, h.image.url, h.powerstats)
          )
        );
      } else {
        this.resultado = `No se encontraron resultados para ${this.nombre}, pruebe con otra búsqueda`;
      }
    });
    console.log(this.heroRes);
  }
}
