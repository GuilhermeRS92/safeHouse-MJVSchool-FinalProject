import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacoesComponent } from './features/log/pages/informacoes/informacoes.component';
import { OcorrenciasComponent } from './features/log/pages/ocorrencias/ocorrencias.component';
import { PerfilComponent } from './features/log/pages/perfil/perfil.component';
import { CadastroComponent } from './features/unlog/pages/cadastro/cadastro.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LembrarSenhaComponent } from './features/unlog/pages/lembrar-senha/lembrar-senha.component';
import { LoginComponent } from './features/unlog/pages/login/login.component';
import { NossosPlanosComponent } from './shared/pages/nossos-planos/nossos-planos.component';
import { SobreNosComponent } from './features/unlog/pages/sobre-nos/sobre-nos.component';
import { FaqComponent } from './features/unlog/pages/faq/faq.component';
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
