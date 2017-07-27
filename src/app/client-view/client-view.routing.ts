import { ClientViewAllProjectsComponent } from './client-view-all-projects/client-view-all-projects.component';
import { ClientViewComponent } from './client-view.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientViewProjectDetailsComponent } from './client-view-project-details/client-view-project-details.component';
import { ClientViewProjectComponent } from './client-view-project/client-view-project.component';

export const routesConfig: Routes = [
  {
    path: 'client', component: ClientViewComponent, pathMatch: "prefix", children: [
      { path: '', component: ClientViewAllProjectsComponent },
      { path: 'project/:id', component: ClientViewProjectComponent },
      { path: 'project/:id/details/:id', component: ClientViewProjectDetailsComponent }
    ]
  },
]

export const routerClientView = RouterModule.forRoot(routesConfig)
