import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { UserAccount } from '../model/model.user-account';
import { AppComponent } from '../app.component';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  login(email: string, password: string) {

    return this.http.post(AppComponent.API_URL + '/login', JSON.stringify({ username: email, password: password }))
      .map((response: Response) => {
        let user = response.json();
        
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }

  logout() {
    return this.http.post(AppComponent.API_URL + "/logout", {})
      .map((response: Response) => {
        localStorage.removeItem('currentUser');
      });
  }

}
