import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpUserEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, tap, last, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){

  }
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    if ( sessionStorage.getItem( 'token' ) ) {
      req = req.clone({
        setHeaders: {
          Authorization: `${sessionStorage.getItem( 'token' )}` //enviamos el token de sesion
        }
      });

    }
    return next.handle( req ).pipe ( tap (
      ( event:any ) => {
        if ( event.type == HttpEventType.Response && event.headers.get('authorization') ) {
          sessionStorage.setItem ( 'token', event.headers.get('authorization') ); //actualizamos el token de sesion cuango viene
        }
      } ) , catchError ( ( event:any ) => {
        if ( (event.status == 404) || (event.status == 0) ) {
          event.error = { error: event.error, msg: "hubo un error en el servidor, intente nuevamente" };
        }
        return throwError(event);
      } )


    );

  }
}
