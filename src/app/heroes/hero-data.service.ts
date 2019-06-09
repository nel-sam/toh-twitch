import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
    constructor(private httpClient: HttpClient) {
    }

    getHeroes(): Observable<Hero[]> {
      return this.httpClient.get<Hero[]>('heroes.json');
    }
}
