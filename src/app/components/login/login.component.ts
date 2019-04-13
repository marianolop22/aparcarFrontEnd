import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showSpinner:Subject<boolean> = new Subject<boolean>();
  
  public username:string;
  public password:string;
  public messageError: string;
  public loading:boolean = false;

  constructor( private router: Router,
               private _main : MainService,
               private _user: UserService ) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  public login( loginForm:NgForm ) {

    this.messageError = null;

    if ( loginForm.valid ) {
      this.loading = true;
      this._main.login ( this.username, this.password).subscribe ( 
        response => {
          this._user.setUser ( response.body.user );
          this.router.navigate ( ['principal'] );
      }, reject => {
        sessionStorage.clear();
        this.messageError = reject.error.message;
      }).add ( () => {
        this.showSpinner.next(true);
        this.loading = false;
      } );
    }
    this.loading = false;


  }

  public sendResponse ():Observable<boolean> {
    return this.showSpinner.asObservable();
  }


}
