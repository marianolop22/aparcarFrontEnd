import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'ingresar', component: LoginComponent},
  { path: 'principal', component: MainComponent, children: [
    //{ path: '', pathMatch: 'full', redirectTo: 'principal' },
    { path: '', component: WelcomeComponent }
  ],canActivate: [ AuthGuardService ] },
  { path: ''             , pathMatch: 'full', redirectTo: 'ingresar' },
  { path: '**'           , pathMatch: 'full', redirectTo: 'ingresar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

