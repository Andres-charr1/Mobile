import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpsService}from '../services/https.service';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    RouterLink
    
  ], exports: [IonicModule, RouterLink],
  providers: [HttpsService]
})
export class SharedModule { }
