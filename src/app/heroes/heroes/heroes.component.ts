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

  heroes: Observable<Hero[]> ;

  constructor(private heroDataService: HeroDataService) { }

  async ngOnInit() {
    this.heroes = this.heroDataService.getHeroes();
  }
}
