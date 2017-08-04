import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  searchForm:FormGroup;

  userRole;

  constructor(@Inject("Kurczak") playlistData, private authService: AuthService, private router: Router) {
    this.searchForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  login() {
    console.log(this.searchForm.value);
    this.authService.login(this.searchForm.value.email, this.searchForm.value.password)

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
