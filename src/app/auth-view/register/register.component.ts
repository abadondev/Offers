import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

credentials = {
  name: '',
  surname: '',
  email: '',
  password: ''
}


  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

    register() {
    this.authService.register(this.credentials.email, this.credentials.password, this.credentials.name, this.credentials.surname)
      .subscribe(
      data => {
            this.router.navigate(['/login'])
      });
  }

}
