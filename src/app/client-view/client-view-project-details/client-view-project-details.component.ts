import { ClientService } from './../../shared/services/clients.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client-view-project-details',
  templateUrl: './client-view-project-details.component.html',
  styleUrls: ['./client-view-project-details.component.scss']
})
export class ClientViewProjectDetailsComponent {

  projectDetailId;
  tickets = new Array<any>();
  loggedTime;
  filteredItems = '';

  constructor(private activeRoute: ActivatedRoute, private clientService: ClientService) {
    this.projectDetailId = this.activeRoute.snapshot.params['id'];
    this.clientService.getDetails(this.projectDetailId)
      .subscribe(result => {
        this.tickets = result[0].tickets;
        this.loggedTime = result[0].time;
      }
      );
  }

  handleDateUpdate(newDate) {
    //console.log(newDate);
  }
  handleFilterItems(item) {
    this.filteredItems = item;
  }
}

