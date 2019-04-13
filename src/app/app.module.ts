import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

//servicios
import { AuthInterceptor } from './interceptors/auth.service';

//Local
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LeftSideComponent } from './components/login/left-side/left-side.component';
import { ButtonSpinnerModule } from './directives/button-spinner.module';
import { MainComponent } from './components/main/main.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { MainService } from './services/main.service';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftSideComponent,
    MainComponent,
    NavBarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ButtonSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },/*
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'No hay datos'
        }
    },*/
    {
      provide: LOCALE_ID,
      useValue:'es'
    },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
