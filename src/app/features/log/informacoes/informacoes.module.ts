import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformacoesComponent } from './informacoes.component';



@NgModule({
  declarations: [
    InformacoesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InformacoesModule { }
