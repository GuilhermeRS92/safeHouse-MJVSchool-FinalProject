import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/shared/models/incident.model';
import { User } from 'src/app/shared/models/user.model';
import { IncidentsService } from '../../../../shared/services/incidents.service';

@Component({
  selector: 'app-ocorrencias-list',
  templateUrl: './ocorrencias-list.component.html',
  styleUrls: ['./ocorrencias-list.component.scss']
})
export class OcorrenciasListComponent implements OnInit {

  user?: User;

  showMessageError = false;

  incident: Incident = this.incidentsService.getDefaultIncident();

  incidents: Array<Incident> = this.incidentsService.getAllIncidents();

  filteredIncidents: Array<Incident> = this.incidents.filter((incident) => incident.userId === this.user?.id);

  constructor(private incidentsService: IncidentsService) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem('user')
    if(userStorage) this.user = JSON.parse(userStorage)

    const userId: any = this.user?.id

    this.filteredIncidents = this.incidents.filter(incident => incident.userId === this.user?.id)

    console.log(this.filteredIncidents)

    if(this.filteredIncidents.length === 0) this.showMessageError = true;
  }

  removeIncidentById() {
    if(this.incident) this.incidentsService.removeIncidentById(this.incident.id);
  }

}
