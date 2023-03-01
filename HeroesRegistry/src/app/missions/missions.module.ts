import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { MissionListComponent } from './mission-list/mission-list.component';



@NgModule({
  declarations: [MissionComponent, MissionListComponent],
  imports: [
    CommonModule
  ]
})
export class MissionsModule { }
