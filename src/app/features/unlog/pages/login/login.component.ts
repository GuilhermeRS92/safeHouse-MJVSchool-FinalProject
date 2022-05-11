import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../../../shared/services/users.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  error: boolean = false;

  constructor(private router: Router, private users: UsersService) { }

  ngOnInit(): void {
  }

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url)
  }

  login() {
    const user = this.users.authenticate(this.email, this.password);

    if(!user) return this.error = true;
    const newUser = { 
      ...user
    }
    delete newUser.password;

    sessionStorage.setItem('user', JSON.stringify(newUser))
    return this.router.navigateByUrl('informacoes')
  }

}
