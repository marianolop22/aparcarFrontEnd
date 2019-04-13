
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate /*, CanActivateChild*/ {

  constructor( private router: Router,
               private _user: UserService ) {
    if ( sessionStorage.getItem ( 'user' ) ) {
      this._user.setUser ( JSON.parse ( sessionStorage.getItem( 'user' ) ) );
    }
  }

  canActivate ( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Observable<boolean> | Promise<boolean> | boolean {

    let accessToken:string = null;

    if ( sessionStorage.getItem ( 'token' ) ){
      accessToken = sessionStorage.getItem ( 'token' );
    }

    if ( accessToken && !jwtHelper.isTokenExpired( accessToken ) ) { //&& sessionStorage.getItem ( 'employee' ) && !jwtHelper.isTokenExpired( accessToken ) ) {
        return true;
    } else {
      alert ( "Debes loguearte o tu sesión ha expirado" );
      sessionStorage.clear();
      this.router.navigate( ['ingresar'] );
      return false;
    }
  }

  // canActivateChild ( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Observable<boolean> | Promise<boolean> | boolean {

  //   let accessToken:string = null;
  //   let hasRole: boolean = false;

  //   if ( sessionStorage.getItem ( 'token' ) ){
  //     accessToken = sessionStorage.getItem ( 'token' );
  //   }

  //   if ( accessToken && !jwtHelper.isTokenExpired( accessToken ) ) { //&& sessionStorage.getItem ( 'employee' ) && !jwtHelper.isTokenExpired( accessToken ) ) {
  //       return true; //no hay role para ingresar
  //   } else {
  //     alert ( "Debes loguearte o tu sesión ha expirado" );
  //     sessionStorage.clear();
  //     this.router.navigate( ['ingresar'] );
  //     return false;
  //   }


  // }

}
