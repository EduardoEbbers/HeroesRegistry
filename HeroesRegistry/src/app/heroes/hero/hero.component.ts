import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroForm: FormGroup;

  constructor(
    private heroesService: HeroesService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroForm = this.builder.group({
      name: ['', Validators.required],
      alias: ['', Validators.required],
      shortBio: ['']
    });
  }

  save() {
    this.heroesService.createHero(this.heroForm.value).subscribe(() => this.router.navigateByUrl('/'));
  }
}
