import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { HomeComponent } from './pages/home/home.component';
import { NossosPlanosComponent } from './pages/nossos-planos/nossos-planos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
        FooterComponent,
        HeaderComponent,
        CreditCardPipe,
        CpfPipe,
        HomeComponent,
        NossosPlanosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
        FooterComponent,
        HeaderComponent,
        CreditCardPipe,
        CpfPipe,
        HomeComponent,
        NossosPlanosComponent,
  ]
})
export class SharedModule { }
