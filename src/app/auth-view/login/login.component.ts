import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';


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

constructor (private authService: AuthService, private router: Router) {

}

login () {
  this.authService.login(this.credentials.email, this.credentials.password)
  .subscribe(
    data => {
     this.router.navigate(['dashboard'])
    }
  );
}


}
