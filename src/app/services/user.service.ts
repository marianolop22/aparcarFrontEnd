import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = new User ();

  constructor(private http: HttpClient) { };

  public setUser ( user: User ) {
    this.user.setUser ( user );
    sessionStorage.setItem ( 'user', JSON.stringify ( this.getUser() ) );
  }

  public getUser ():User {
    return this.user;
  }

  public findUserByFilter ( user:User ):Observable<any> {
    let params = {
      name : user.name,
    };
    return this.http.post ( `${atob(environment.apiUrl)}/users/findPerson`, params ,{ observe:'response' } ).pipe ();
  }



}
