import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentsService } from '../../services/incidents.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import * as moment from 'moment';

@Component({
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.scss']
})
export class OcorrenciasComponent implements OnInit {

  incident: Incident = this.incidentsService.getDefaultIncident();

  incidents: Array<Incident> = this.incidentsService.getAllIncidents();

  filteredIncidents: Array<Incident> = this.incidents.filter((incident) => incident.userId === this.user?.id);

  constructor(private incidentsService: IncidentsService, private router: Router) { }

  user?: User;
  showMessageError = false;


  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user')
    if(userStorage) this.user = JSON.parse(userStorage)

    const userId: any = this.user?.id

    this.filteredIncidents = this.incidents.filter(incident => incident.userId === this.user?.id)

    console.log(this.filteredIncidents)

    if(this.filteredIncidents.length === 0) this.showMessageError = true;
  }

  onSubmitIncident(userForm: NgForm) {
    const formValue = userForm.value;
    this.incident.id = this.incidentsService.generateNextId();
    this.incident.userId = Number(this.user?.id);
    this.incident.type = formValue.type;
    this.incident.incidentDate = formValue.incidentDate;
    this.incident.inclusionDate = new Date();
    this.incident.description = formValue.description;
    this.incident.status = 'Aguardando atendimento';
    this.incidentsService.createIncident(this.incident);
    window.alert('Ocorrência adicionada com sucesso!')
    console.log(this.filteredIncidents)
  }

  removeIncidentById() {
    if(this.incident) this.incidentsService.removeIncidentById(this.incident.id);
  }

}
