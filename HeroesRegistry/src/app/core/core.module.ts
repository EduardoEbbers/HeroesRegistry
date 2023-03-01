import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './../app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
