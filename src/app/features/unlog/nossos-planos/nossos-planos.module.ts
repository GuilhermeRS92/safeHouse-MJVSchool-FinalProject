import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NossosPlanosComponent } from './nossos-planos.component';



@NgModule({
  declarations: [
    NossosPlanosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NossosPlanosModule { }
