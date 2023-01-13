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
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
