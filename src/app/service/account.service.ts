import { Injectable } from '@angular/core';
import { UserAccount } from '../model/model.user-account'
import { Http } from "@angular/http";
import { AppComponent } from "../app.component";
import "rxjs/add/operator/map";

@Injectable()
export class AccountService {

  constructor(public http: Http) { }

  createAccount(user: UserAccount) {
    return this.http.post(AppComponent.API_URL + '/account/register', user)
      .map(resp => resp.json());
  }

}
