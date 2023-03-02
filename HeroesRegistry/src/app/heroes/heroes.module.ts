import { FlexLayoutModule } from '@angular/flex-layout';
import { MissionsModule } from './../missions/missions.module';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroesComponent, 
    HeroDetailComponent, 
    HeroComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule,
    MissionsModule
  ]
})
export class HeroesModule { }
