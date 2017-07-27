import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthViewComponent } from './auth-view.component';

  export const routesConfig:Routes = [
    { path: '', component: AuthViewComponent, children: [
      { path: '', redirectTo:'login', pathMatch: 'prefix'},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent}
    ]}
  ]

  export const routerAuth = RouterModule.forRoot(routesConfig)
