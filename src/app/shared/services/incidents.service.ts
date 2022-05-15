import { Injectable } from '@angular/core';
import { Incident } from '../models/incident.model';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  incidents: Array<Incident> = [

    {
      id: 1,
      userId: 2,
      type: 'Dano por àgua',
      incidentDate: new Date (),
      inclusionDate: new Date (),
      description: 'Cano estourou',
      status: 'Finalizado'
    },

    {
      id: 2,
      userId: 1,
      type: 'Quebra de Vidro',
      incidentDate: new Date (),
      inclusionDate: new Date (),
      description: 'Vidro quebrado por queda de meteorito',
      status: 'Finalizado'
    }
  ]

  getAllIncidents() {
    return this.incidents
  }

  getDefaultIncident(): Incident {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      id: this.generateNextId(),
      userId: 0,
      type: ' ',
      incidentDate: ' ',
      inclusionDate: dateToday,
      description: ' ',
      status: ' '
    }
  }

  removeIncidentById(id: number) {
    window.alert('Ocorrência removida com sucesso!');
    this.navigateByUrl("/informacoes")
    const incidentIndex = this.incidents.findIndex((incident) => incident.id === id);
    return this.incidents.splice(incidentIndex);
  }

  generateNextId(): number {
    return Number(this.incidents[(this.incidents.length - 1)].id + 1);
  }

  createIncident(incidents: Incident) {
    this.incidents.push(incidents);
    return this.incidents;
  }

  totalIncidents() {
    return this.incidents.length
  }

  navigateByUrl (url: string) {
    return this.router.navigateByUrl(url);
  }

  constructor(private router: Router) { }
}
