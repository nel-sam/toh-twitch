import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroDataService } from '../hero-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'toh-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroDataService: HeroDataService) { }

  async ngOnInit() {
    this.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getHeroes(): Observable<Hero[]> {
    return this.heroDataService.getHeroes();
  }
}
