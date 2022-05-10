import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InformacoesModule } from './features/log/informacoes/informacoes.module';
import { OcorrenciasModule } from './features/log/ocorrencias/ocorrencias.module';
import { PerfilModule } from './features/log/perfil/perfil.module';
import { CadastroModule } from './features/unlog/cadastro/cadastro.module';
import { HomeModule } from './features/unlog/home/home.module';
import { LembrarSenhaModule } from './features/unlog/lembrar-senha/lembrar-senha.module';
import { LoginModule } from './features/unlog/login/login.module';
import { NossosPlanosModule } from './features/unlog/nossos-planos/nossos-planos.module';
import { FaqModule } from './features/unlog/faq/faq.module';
import { SobreNosModule } from './features/unlog/sobre-nos/sobre-nos.module';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InformacoesModule,
    OcorrenciasModule,
    PerfilModule,
    SharedModule,
    CadastroModule,
    HomeModule,
    LembrarSenhaModule,
    LoginModule,
    NossosPlanosModule,
    FaqModule,
    SobreNosModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
