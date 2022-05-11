import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { InformacoesComponent } from './pages/informacoes/informacoes.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { OcorrenciasComponent } from './pages/ocorrencias/ocorrencias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  InformacoesComponent,
  PerfilComponent,
  OcorrenciasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogModule { }
