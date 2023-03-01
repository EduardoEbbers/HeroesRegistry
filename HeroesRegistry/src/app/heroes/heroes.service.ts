import { Observable } from 'rxjs';
import { Hero } from './../core/hero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesUrl: string;

  constructor(private http: HttpClient) { 
    this.heroesUrl = 'api/heroes';
  }
  
  createHero(hero: Hero): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl);
  }
}
