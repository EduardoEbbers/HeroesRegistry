import { MissionService } from './../mission.service';
import { Hero } from './../../core/hero';
import { Mission } from './../../core/mission';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html'
})
export class MissionListComponent implements OnInit {
  @Input()
  hero: Hero

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.missionService.missionAdded$
      .subscribe(mission => {
        if(!this.hero.missions) {
          this.hero.missions = [];
        }
        this.hero.missions.push(mission);
      });
  }

  completeMission(mission: Mission) {
    this.missionService.completeMission(mission, this.hero)
      .subscribe(() => {
        this.hero.missions = this.hero.missions.filter(m => m !== mission);
      });
  }

  getPriorityColor(mission: Mission): string {
    switch(mission.priority) {
      case 'medium':
        return 'yellow'
      case 'high':
        return 'red'
    }
  }
}
