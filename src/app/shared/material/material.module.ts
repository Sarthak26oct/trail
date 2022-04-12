import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations:[],

  imports: [
  CommonModule,
  MatButtonModule,
  MatSliderModule,
  ],

  exports: [
  MatButtonModule,
  MatSliderModule
  ]
})

export class MaterialModule { }
