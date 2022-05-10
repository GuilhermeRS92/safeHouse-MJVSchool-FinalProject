import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SobreNosComponent } from './sobre-nos.component';



@NgModule({
  declarations: [
    SobreNosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SobreNosModule { }
