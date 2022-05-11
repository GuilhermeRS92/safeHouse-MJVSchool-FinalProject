import { EmailValidator } from "@angular/forms"

export interface User {
    id: number,
    name: string,
    CPF: string,
    birthday: Date | string,
    email: EmailValidator | string,
    password?: string,
    type: string,
    street: string,
    complement: string,
    district: string,
    city: string,
    state: string
    subscription: string,
    creditCard: string,
    lastPayment: Date | string,
    nextPayment: Date | string,
    inclusionDate: Date | string
}