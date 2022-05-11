import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { LembrarSenhaComponent } from './pages/lembrar-senha/lembrar-senha.component';
import { FaqComponent } from './pages/faq/faq.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CadastroComponent,
    FaqComponent,
    LembrarSenhaComponent,
    LoginComponent,
    SobreNosComponent 
    ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UnlogModule { }
