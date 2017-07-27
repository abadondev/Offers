import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent {
  searchTerm$ = new Subject();
  public results = [];

    constructor( private searchService: SearchService ) {
        this.searchService.search(this.searchTerm$)
          .subscribe(results => {
            this.results.push(results);
          });

    }
}
