import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user.model';

@Component({
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  user?: User;

  constructor() { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user')
    if(userStorage) this.user = JSON.parse(userStorage)
  }

}
