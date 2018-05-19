import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { UserAccount } from '../model/model.user-account';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private userUrl = 'http://localhost:8080';

  public getUsers(): Observable<any> {
    return this.http.get(this.userUrl + "/users");
  }

}
