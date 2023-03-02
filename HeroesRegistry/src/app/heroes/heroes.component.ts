import { HeroesService } from './heroes.service';
import { Hero } from './../core/hero';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;  
  }
}
