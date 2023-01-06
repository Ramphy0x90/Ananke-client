import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnankeAppComponent } from './containers/app/app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent},
    {path: 'app', component: AnankeAppComponent, canActivate: [AuthGuard]},
    {path: 'log-in', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
