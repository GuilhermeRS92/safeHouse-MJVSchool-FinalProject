import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesComponent } from './features/log/informacoes/informacoes.component';
import { OcorrenciasComponent } from './features/log/ocorrencias/ocorrencias.component';
import { PerfilComponent } from './features/log/perfil/perfil.component';
import { CadastroComponent } from './features/unlog/cadastro/cadastro.component';
import { HomeComponent } from './features/unlog/home/home.component';
import { LembrarSenhaComponent } from './features/unlog/lembrar-senha/lembrar-senha.component';
import { LoginComponent } from './features/unlog/login/login.component';
import { NossosPlanosComponent } from './features/unlog/nossos-planos/nossos-planos.component';
import { SobreNosComponent } from './features/unlog/sobre-nos/sobre-nos.component';
import { FaqComponent } from './features/unlog/faq/faq.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'sobre-nos', component: SobreNosComponent},
  { path: 'nossos-planos', component: NossosPlanosComponent },
  { path: 'faq', component: FaqComponent},
  { path: 'informacoes', component: InformacoesComponent, canActivate: [AuthGuard]},
  { path: 'ocorrencias', component: OcorrenciasComponent, canActivate: [AuthGuard]},
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  { path: 'lembrar-senha', component: LembrarSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
