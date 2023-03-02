import { MissionComponent } from './../../missions/mission/mission.component';
import { HeroesService } from './../heroes.service';
import { Hero } from './../../core/hero';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnChanges {
  hero: Hero;
  
  @Input()
  id: string;

  @Output()
  delete = new EventEmitter();

  constructor(private heroesService: HeroesService, private dialog: MatDialog) { }

  ngOnChanges() {
    this.hero = null;
    this.getHero();
  }

  assignMission() {
    this.dialog.open(MissionComponent, { data: this.hero });
  }

  deleteHero() {
    this.heroesService.deleteHero(this.hero.id)
      .subscribe(() => {
        this.delete.emit();
      });
  }

  private getHero() {
    this.heroesService.getHero(this.id)
      .subscribe(hero => {
        this.hero = hero;
      });
  }
}
