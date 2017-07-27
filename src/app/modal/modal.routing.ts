import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal.component';

  export const routesConfig:Routes = [
    { path: 'project', component: ModalComponent, outlet: 'projects' },
  ]

  export const routerModal = RouterModule.forChild(routesConfig)
