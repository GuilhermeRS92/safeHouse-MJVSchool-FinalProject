import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  templateUrl: './nossos-planos.component.html',
  styleUrls: ['./nossos-planos.component.scss']
})
export class NossosPlanosComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  user?: User;
  standard?: boolean = false;
  plus?: boolean = false;
  premium?: boolean = false;
  unsubscribed?: boolean = false;
  subscription = this.user?.subscription;
  signedIn: boolean = false;

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user')
    if(userStorage) this.user = JSON.parse(userStorage)
    if(this.user?.subscription === 'Standard') this.standard = true
    if(this.user?.subscription === 'Plus') this.plus = true
    if(this.user?.subscription === 'Premium') this.premium = true
    if(this.user?.subscription === 'unsubscribed') this.unsubscribed = true
    if(Number(this.user?.id) > 0) this.signedIn = true

    const userId: Number = Number(this.user?.id);

    console.log(this.subscription)
    console.log(this.signedIn)
    }

    navigateByUrl(url: string) {
      return this.router.navigateByUrl(url)
    }

    standardSubscription() {

    }

  }
