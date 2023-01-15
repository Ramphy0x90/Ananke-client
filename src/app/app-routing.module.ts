import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnankeAppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateTicketComponent } from './containers/create-ticket/create-ticket.component';
import { RecentTicketsComponent } from './containers/recent-tickets/recent-tickets.component';
import { ClosedTicketsComponent } from './containers/ticket/closed-tickets/closed-tickets.component';
import { TicketComponent } from './containers/ticket/ticket.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'app', component: AnankeAppComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'ticket/:id', component: TicketComponent },
      { path: 'tickets', component: TicketsComponent, children: [
        { path: 'create', component: CreateTicketComponent },
        { path: 'all', component: RecentTicketsComponent },
        { path: 'closed', component: ClosedTicketsComponent }
      ] },
    ]
  },
  { path: 'log-in', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
