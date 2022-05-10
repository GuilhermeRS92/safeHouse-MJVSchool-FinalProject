import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './lembrar-senha.component.html',
  styleUrls: ['./lembrar-senha.component.scss']
})
export class LembrarSenhaComponent implements OnInit {

  constructor(private router: Router, private user: UsersService) { }

  email: string = "";
  email2: string = "";

  send: boolean = false;
  error: boolean = false;

  ngOnInit(): void {
  }

  navigateByUrl(url: string) {
    return this.router.navigateByUrl(url)
  }

  comparisonEmail(email: string, email2: string) {
    if(this.email === this.email2 && this.user.comparisonEmail(this.email2)) return this.sendEmail();
    return this.errorEmail()
  }

  errorEmail() {
    this.send = false;
    this.error = true
  }

  sendEmail() {
    this.send = true;
    this.error = false
  }
}
