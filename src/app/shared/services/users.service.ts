import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [

    {
    id: 1,
    name: 'Guilherme Ribeiro de Souza',
    CPF: '12345678911',
    birthday: '1992/12/20',
    email: 'guilherme@safehouse.com.br',
    password: '12345',
    type: 'admin',
    street: 'Rua Teste, 123',
    complement: 'Apto 108',
    district: 'Centro',
    city: 'São Paulo',
    state: 'SP',
    subscription: 'Premium',
    creditCard: '1234567890123456',
    lastPayment: '2022/05/01',
    nextPayment: '2022/06/01',
    inclusionDate: '2022/05/01'
    },

    {
      id: 2,
      name: 'Nathan',
      CPF: '12345678912',
      birthday: '1992/12/20',
      email: 'nathan@mjv.com.br',
      password: '12345',
      type: 'client',
      street: 'Rua Teste, 123',
      complement: 'Apto 108',
      district: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      subscription: 'Standard',
      creditCard: '123456780123456',
      lastPayment: '2022/05/01',
      nextPayment: '2022/06/01',
      inclusionDate: '2022/05/01'
      },

      {
        id: 3,
        name: 'Alan',
        CPF: '12345678913',
        birthday: '1992/12/20',
        email: 'alan@mjv.com.br',
        password: '12345',
        type: 'client',
        street: 'Rua Teste, 123',
        complement: 'Apto 108',
        district: 'Centro',
        city: 'São Paulo',
        state: 'SP',
        subscription: 'Plus',
        creditCard: '123456780123456',
        lastPayment: '2022/05/01',
        nextPayment: '2022/06/01',
        inclusionDate: '2022/05/01'
        },

        {
          id: 4,
          name: 'Ieda',
          CPF: '12345678914',
          birthday: '1992/12/20',
          email: 'ieda@mjv.com.br',
          password: '12345',
          type: 'client',
          street: 'Rua Teste, 123',
          complement: 'Apto 108',
          district: 'Centro',
          city: 'São Paulo',
          state: 'SP',
          subscription: 'Premium',
          creditCard: '123456780123456',
          lastPayment: '2022/05/01',
          nextPayment: '2022/06/01',
          inclusionDate: '2022/05/01'
          },

          {
            id: 5,
            name: 'Ricardo',
            CPF: '12345678915',
            birthday: '1992/12/20',
            email: 'ricardo@safehouse.com.br',
            password: '12345',
            type: 'admin',
            street: 'Rua Teste, 123',
            complement: 'Apto 108',
            district: 'Centro',
            city: 'São Paulo',
            state: 'SP',
            subscription: 'Premium',
            creditCard: '123456780123456',
            lastPayment: '2022/05/01',
            nextPayment: '2022/06/01',
            inclusionDate: '2022/05/01'
            },

  ]

  constructor() { }

  getAllUsers() {
    return this.users
  }

  getDefaultUser(): User {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      name: ' ',
      CPF: ' ',
      birthday: ' ',
      email: ' ',
      password: ' ',
      type: 'client',
      street: ' ',
      complement: ' ',
      district: ' ',
      city: ' ',
      state: ' ',
      subscription: ' ',
      creditCard: ' ',
      lastPayment: ' ',
      nextPayment: ' ',
      inclusionDate: dateToday,
    }
  }

  authenticate(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password);
  }

  comparisonEmail(email: string) {
    return this.users.find((user) => user.email === email)
  }

  generateNextId(): number {
    return this.users[(this.users.length - 1)].id + 1;
  }

  createUser(users: User) {
    this.users.push(users);
    return this.users;
  }

}
