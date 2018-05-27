import { Injectable } from '@angular/core';
import { UserAccount } from '../model/model.user-account'
import { Http } from "@angular/http";
import { AppComponent } from "../app.component";

@Injectable()
export class RegistrationService {

  constructor(public http: Http) { }

  createAccount(user: UserAccount) {
    return this.http.post(AppComponent.API_URL + '/users/register', user);
  }

}
