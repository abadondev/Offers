import { ProjectStepThirdComponent } from './projects/project-step-third/project-step-third.component';
import { ProjectStepSecondComponent } from './projects/project-step-second/project-step-second.component';
import { ProjectStepFirstComponent } from './projects/project-step-first/project-step-first.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './../guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './dashboard-view.component';


export const routesConfig: Routes = [
  {
    path: 'dashboard', component: DashboardViewComponent, canActivate: [AuthGuard], children: [
      {
        path: 'project', component: ProjectsComponent,
        children: [
          { path: '', redirectTo:'1', pathMatch:'full' },
          { path: '1', component: ProjectStepFirstComponent },
          { path: '2', component: ProjectStepSecondComponent},
          { path: '3', component: ProjectStepThirdComponent},
        ]
      }
    ]
  }
]
export const routerDashboard = RouterModule.forRoot(routesConfig)
