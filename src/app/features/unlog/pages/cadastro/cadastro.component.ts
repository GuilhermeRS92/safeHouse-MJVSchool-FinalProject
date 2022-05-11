import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user.model';
import { UsersService } from '../../../../shared/services/users.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  user: User = this.users.getDefaultUser();

  constructor(private router: Router, private users: UsersService) { }

  ngOnInit(): void {
  }

  navigateByUrl (url: string) {
    return this.router.navigateByUrl(url);
  }

  onSubmitUser(userForm: NgForm) {
    const formValue = userForm.value;
    this.user.id = Number(this.users.generateNextId());
    this.user.name = formValue.name;
    this.user.CPF = formValue.CPF;
    this.user.birthday = formValue.birthday;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.user.subscription = 'unsubscribed';
    this.users.createUser(this.user);
    alert('Cadastro realizado com sucesso!');
    this.router.navigateByUrl('login')
    console.log(this.user)
  }
}
