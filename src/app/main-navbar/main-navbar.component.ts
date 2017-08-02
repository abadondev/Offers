import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
