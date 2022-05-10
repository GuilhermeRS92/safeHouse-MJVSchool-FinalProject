import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CreditCardPipe } from './pipes/credit-card.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [
        FooterComponent,
        HeaderComponent,
        CreditCardPipe,
        CpfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CreditCardPipe,
    CpfPipe
  ]
})
export class SharedModule { }
