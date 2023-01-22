import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnankeAppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { TicketComponent } from './containers/ticket/ticket.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TicketsComponent } from './containers/tickets/tickets.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrModule } from 'ngx-toastr';
import { TicketActionsMenuComponent } from './components/ticket-actions-menu/ticket-actions-menu.component';
import { CreateTicketComponent } from './containers/create-ticket/create-ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { RecentTicketsComponent } from './containers/recent-tickets/recent-tickets.component';
import { ClosedTicketsComponent } from './containers/ticket/closed-tickets/closed-tickets.component';
import { TicketsTableComponent } from './components/ticket/tickets-table/tickets-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AnankeAppComponent,
    HomeComponent,
    LoginComponent,
    TicketComponent,
    NavBarComponent,
    AuthFormComponent,
    SideNavBarComponent,
    DashboardComponent,
    TicketsComponent,
    TicketActionsMenuComponent,
    CreateTicketComponent,
    TicketFormComponent,
    RecentTicketsComponent,
    ClosedTicketsComponent,
    TicketsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
