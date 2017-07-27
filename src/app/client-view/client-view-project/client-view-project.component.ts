import { ClientService } from './../../shared/services/clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client-view-project',
  templateUrl: './client-view-project.component.html',
  styleUrls: ['./client-view-project.component.scss']
})
export class ClientViewProjectComponent {

  projectId;
  activeSows;

  constructor(private activeRoute: ActivatedRoute, private clientService: ClientService) {
    this.projectId = this.activeRoute.snapshot.params['id'];
    this.clientService.getProjectSow(this.projectId)
      .subscribe(result => {
        this.activeSows = result
      }
      );
  }
}
