import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from './../core/hero';
import { Mission } from './../core/mission';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private missionUrl: string;
  private missionAddedSource = new Subject<Mission>();
  readonly missionAdded$ = this.missionAddedSource.asObservable();

  constructor(private http: HttpClient) { 
    this.missionUrl = 'api/heroes';
  }

  assignMission(mission: Mission, hero: Hero): Observable<any> {
    if(!hero.missions) {
      hero.missions = [];
    }
    hero.missions.push(mission);

    return this.http.put<Hero>(`${this.missionUrl}/${hero.id}`, hero)
      .pipe(
        map(() => this.missionAddedSource.next(mission))
      );
  }

  completeMission(mission: Mission, hero: Hero): Observable<any> {
    hero.missions = hero.missions.filter(m => m !== mission);
    return this.http.put<Hero>(`${this.missionUrl}/${hero.id}`, hero);
  }
}
