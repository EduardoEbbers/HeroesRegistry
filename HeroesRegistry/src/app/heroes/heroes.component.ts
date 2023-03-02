import { HeroesService } from './heroes.service';
import { Hero } from './../core/hero';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  @ViewChild(MatDrawer)
  private drawer: MatDrawer

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
    this.drawer.open();
  }
}
