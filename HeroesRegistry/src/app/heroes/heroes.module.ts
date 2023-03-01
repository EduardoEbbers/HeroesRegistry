import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, HeroComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
