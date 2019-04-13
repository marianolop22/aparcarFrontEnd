export class User {

  public user: string;
  public name: string;
  public email: string;

  constructor () {
    this.user = null;
    this.name = null;
    this.email = null;

  }

  public setUser ( user: User ) {
    this.user = user.user;
    this.name = user.name;
    this.email = user.email;
  }

  public getUser () :User {
    return this;
  }



}
