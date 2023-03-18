import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnankeAppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { NavBarComponent } from './components/navigation/nav-bar/nav-bar.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavBarComponent } from './components/navigation/side-nav-bar/side-nav-bar.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TicketsComponent } from './containers/ticket/tickets/tickets.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToastrModule } from 'ngx-toastr';
import { TicketActionsMenuComponent } from './components/ticket/ticket-actions-menu/ticket-actions-menu.component';
import { CreateTicketComponent } from './containers/ticket/create-ticket/create-ticket.component';
import { EditTicketComponent } from './containers/ticket/edit-ticket/edit-ticket.component';
import { TicketFormComponent } from './components/ticket/ticket-form/ticket-form.component';
import { RecentTicketsComponent } from './containers/ticket/recent-tickets/recent-tickets.component';
import { ClosedTicketsComponent } from './containers/ticket/closed-tickets/closed-tickets.component';
import { TicketsTableComponent } from './components/ticket/tickets-table/tickets-table.component';
import { IdToNamePipe } from './pipes/ticket/id-to-name.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdminComponent } from './containers/admin/admin.component';
import { InfoCardComponent } from './components/info-card/info-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AnankeAppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    AuthFormComponent,
    SideNavBarComponent,
    DashboardComponent,
    TicketsComponent,
    TicketActionsMenuComponent,
    CreateTicketComponent,
    EditTicketComponent,
    TicketFormComponent,
    RecentTicketsComponent,
    ClosedTicketsComponent,
    TicketsTableComponent,
    IdToNamePipe,
    AdminComponent,
    InfoCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule,
    NgSelectModule,
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
