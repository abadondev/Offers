import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  userRole;

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.login(this.credentials.email, this.credentials.password)
      .subscribe(
      data => {
        this.userRole = sessionStorage.getItem('user_role');
        switch (this.userRole) {
          case '1':
            this.router.navigate(['/client'])
            break;
          case '2':
            this.router.navigate(['/dashboard'])
            break;
          default:
            this.router.navigate(['/login'])
        }
      },
      error => console.log(error)
      );
  }


}
