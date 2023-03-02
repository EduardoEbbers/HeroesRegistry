import { MissionService } from './../mission.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  missionForm: FormGroup;
  priorities: string[] = ['low', 'medium', 'high'];

  constructor(
    private builder: FormBuilder,
    private missionService: MissionService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MissionComponent>
  ) { }

  ngOnInit() {
    this.missionForm = this.builder.group({
      title: ['', Validators.required],
      priority: ['']
    });
  }

  save() {
    this.missionService.assignMission(this.missionForm.value, this.data)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
