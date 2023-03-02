import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { MissionListComponent } from './mission-list/mission-list.component';



@NgModule({
  declarations: [
    MissionComponent, 
    MissionListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MissionListComponent
  ]
})
export class MissionsModule { }
