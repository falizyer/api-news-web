import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHeaderComponent } from './main-header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  exports: [
    MainHeaderComponent
  ],
  imports: [
    CommonModule,

    // Material Modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class MainHeaderModule { }
