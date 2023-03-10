import { HeroesService } from './heroes.service';
import { Hero } from './../core/hero';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.drawer.open();
  }

  onHeroDeleted() {
    this.getHeroes();
    this.drawer.close();
  }

  private getHeroes() {
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }
}
