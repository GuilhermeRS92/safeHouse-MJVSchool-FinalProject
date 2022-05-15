import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { Incident } from '../../../../shared/models/incident.model';
import { User } from '../../../../shared/models/user.model';
import { IncidentsService } from '../../../../shared/services/incidents.service';

@Component({
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})

export class InformacoesComponent implements OnInit {

  user?: User;
  standard?: boolean = false;
  plus?: boolean = false;
  premium?: boolean = false;
  unsubscribed?: boolean = false;

  subscription = this.user?.subscription;

  incidents: Array<Incident> = this.incidentsService.getAllIncidents();
  filteredIncidents: Array<Incident> = this.incidents;
  incidentsTotal: number = 0;


  constructor(private incidentsService: IncidentsService, private userService: UsersService, private router: Router) { }

  ngOnInit(): void {

    const userStorage = sessionStorage.getItem('user')
    if(userStorage) this.user = JSON.parse(userStorage)
    if(this.user?.subscription === 'Standard') this.standard = true
    if(this.user?.subscription === 'Plus') this.plus = true
    if(this.user?.subscription === 'Plus') this.standard = true
    if(this.user?.subscription === 'Premium') this.premium = true
    if(this.user?.subscription === 'Premium') this.plus = true
    if(this.user?.subscription === 'Premium') this.standard = true
    if(this.user?.subscription === 'unsubscribed') this.unsubscribed = true

    const userId: any = this.user?.id

    this.filteredIncidents = this.incidents.filter(incident => incident.userId === this.user?.id)
    this.incidentsTotal = this.filteredIncidents.length

    console.log(this.incidentsTotal)
    }

    navigateByUrl (url: string) {
      return this.router.navigateByUrl(url);
    }

    cancelSubscription() {
      this.userService.changeSubscription(Number(this.user?.id), 'unsubscribed')
      sessionStorage.clear();
      const newUser = { 
        ...this.userService.users.find(user => user.id === this.user?.id)
      }
      delete newUser.password;
  
      sessionStorage.setItem('user', JSON.stringify(newUser))

      this.navigateByUrl('nossos-planos')
    }
  }

