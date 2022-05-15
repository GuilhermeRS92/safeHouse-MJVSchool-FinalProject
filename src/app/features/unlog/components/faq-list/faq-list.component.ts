import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/shared/models/faq.model';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  showMessageError = false;

  faqs: Array<Faq> = [
    {
    id: 1,
    question: 'O que é seguro sob demanda?',
    answer: 'O seguro sob demanda é um tipo de seguro que permite a proteção por períodos de tempo mais curtos ou intermitentes. Neste modelo de seguro, você pode ativar e desativar o seu seguro quando quiser e só é cobrado pelo período que usa.',
    },

    {
    id: 2,
    question: 'Como ativar e desativar o meu seguro?',
    answer: 'Seu seguro pode ser ativado automaticamente ou manualmente, de acordo com a sua opção ao simular e contratar os créditos para o pagamento.',
    },

    {
    id: 3,
    question: 'O meu seguro tem alguma carência?',
    answer: 'Não, os seguros da safeHouse não possuem carência.',
    },

    {
    id: 4,
    question: 'O seguro tem algum prazo de fidelidade?',
    answer: 'Não, os seguros da safeHouse não possuem prazo de fidelidade.',
    },

    {
    id: 5,
    question: 'Ao final da contratação, eu recebo alguma apólice em casa?',
    answer: 'Você receberá em seu email uma mensagem com informações sobre cada contratação.',
    },

    {
    id: 6,
    question: 'Quais são as formas de pagamento?',
    answer: 'Você pode comprar crédito de seguro sempre pelo seu cartão de crédito, nas bandeiras Visa, Mastercard, Elo, Hipercard e American Express.',
    },

    {
    id: 7,
    question: 'Meu cartão foi recusado. O que fazer?',
    answer: 'Entre em contato com a administradora do seu cartão para entender o que aconteceu. Se o problema persistir, tente cadastrar um novo cartão ou entre em contato conosco para buscarmos uma solução.',
    },

    {
    id: 8,
    question: 'Serei cobrado com alguma taxa ou multa ao cancelar o meu seguro?',
    answer: 'Não. A safeHouse nunca irá cobrar taxas ou penalidades caso você deseje desativar ou cancelar seus planos.'
    }
  ];

  filteredFaq = this.faqs;

  constructor() { }

  ngOnInit(): void {
  }

  filterFaq(event: any) {
    this.showMessageError = false;
    const searchValue = event.target.value;
    if (searchValue.length > 0) {
      this.filteredFaq = this.faqs.filter((faq) => faq.question.toUpperCase().search(searchValue.toUpperCase()) > - 1);
      return this.filteredFaq;
    } return this.filteredFaq = this.faqs
  }


}
