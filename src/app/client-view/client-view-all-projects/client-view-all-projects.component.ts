import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-view-all-projects',
  templateUrl: './client-view-all-projects.component.html',
  styleUrls: ['./client-view-all-projects.component.scss']
})
export class ClientViewAllProjectsComponent implements OnInit {
  products = [
    {  
      name: 'Endomondo',
      id: 12345,
      values: [
        {
          unit: 'first',
          number: 7
        },
        {
          unit: 'second',
          number: 23
        },
        {
          unit: 'third',
          number: 55
        }
      ]
    },
    {
      name: 'Spotify',
      id: 6789,
      values: [
        {
          unit: 'first',
          number: 7
        },
        {
          unit: 'second',
          number: 23
        },
        {
          unit: 'third',
          number: 55
        }
      ]
    },
    {
      name: 'Shine',
      id: 54321,
      values: [
        {
          unit: 'first',
          number: 7
        },
        {
          unit: 'second',
          number: 23
        },
        {
          unit: 'third',
          number: 55
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
