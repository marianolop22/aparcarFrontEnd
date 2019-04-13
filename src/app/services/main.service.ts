import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private http: HttpClient ) { }

  public login ( username:string, password:string ):Observable<any> {
    return this.http.post ( `${atob(environment.apiUrl)}/login`, {username, password} ,{ observe:'response' } ).pipe ();
  }

  public getServices ( ):Observable<any> {
    return this.http.get ( `${atob(environment.apiUrl)}/services`,{ observe:'response' } ).pipe ();
  }




}
