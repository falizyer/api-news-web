import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './main-footer.component';



@NgModule({
  declarations: [
    MainFooterComponent
  ],
  exports: [
    MainFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainFooterModule { }
