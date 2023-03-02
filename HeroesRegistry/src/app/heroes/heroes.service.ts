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
  
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  
  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  createHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  deleteHero(id: string): Observable<Hero> {
    return this.http.delete<Hero>(`${this.heroesUrl}/${id}`);
  }
}
