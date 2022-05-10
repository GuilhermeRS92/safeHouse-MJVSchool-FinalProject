import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LembrarSenhaComponent } from './lembrar-senha.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LembrarSenhaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class LembrarSenhaModule { }
