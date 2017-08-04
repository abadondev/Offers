import { routerDashboard } from './dashboard-view/dashboard.routing';
import { TimeService } from './shared/services/time.service';
import { ClientService } from './shared/services/clients.service';
import { HttpClientService } from './HttpClientService/http-client-service.service';
import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { SearchService } from './shared/services/search.service';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { routerModule } from './routing/routing';
import { routerAuth } from './auth-view/auth.routing';
import { routerClientView } from './client-view/client-view.routing';
import { ProjectsComponent } from './dashboard-view/projects/projects.component';
import { AuthViewComponent } from './auth-view/auth-view.component';
import { LoginComponent } from './auth-view/login/login.component';
import { RegisterComponent } from './auth-view/register/register.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { SetNavbarDirective } from './set-navbar.directive';
import { ClientViewProjectComponent } from './client-view/client-view-project/client-view-project.component';
import { ClientViewProjectDetailsComponent } from './client-view/client-view-project-details/client-view-project-details.component';
import { StartEndDateComponent } from './start-end-date/start-end-date.component';
import { CustomFilterPipe } from './custom-filter-pipe/custom-filter.pipe';
import { ClientViewAllProjectsComponent } from './client-view/client-view-all-projects/client-view-all-projects.component';
import { ProjectStepFirstComponent } from './dashboard-view/projects/project-step-first/project-step-first.component';
import { ProjectStepSecondComponent } from './dashboard-view/projects/project-step-second/project-step-second.component';
import { ProjectStepThirdComponent } from './dashboard-view/projects/project-step-third/project-step-third.component';
import playlistData from './playlist.data';


@NgModule({
  declarations: [
    AppComponent,
    DashboardViewComponent,
    ProjectsComponent,
    AuthViewComponent,
    LoginComponent,
    RegisterComponent,
    ClientViewComponent,
    MainNavbarComponent,
    SetNavbarDirective,
    ClientViewProjectComponent,
    ClientViewProjectDetailsComponent,
    StartEndDateComponent,
    CustomFilterPipe,
    ClientViewAllProjectsComponent,
    ProjectStepFirstComponent,
    ProjectStepSecondComponent,
    ProjectStepThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routerModule,
    routerAuth,
    routerClientView,
    routerDashboard
  ],
  providers: [AuthService, SearchService, ClientService, AuthGuard, HttpClientService, TimeService,
    {
      provide: "KurczakExtension", useValue: playlistData
    },
        {
      provide: "Kurczak", useFactory: (data) => {
        console.log('kurczak data', data);
        data.push({name: "Franek"})
        return data;
      }, deps: ["KurczakExtension"]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
