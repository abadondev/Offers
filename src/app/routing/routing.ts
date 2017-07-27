import { AuthGuard } from './../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from '../dashboard-view/dashboard-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';

  export const routesConfig:Routes = [
    { path: 'dashboard', component: DashboardViewComponent  },//tutaj trzeba dodac canActivate: [AuthGuard]
  ]
  export const routerModule = RouterModule.forRoot(routesConfig)
