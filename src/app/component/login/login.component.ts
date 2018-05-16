import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../../model/model.user-account';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.password);
    this.authService.login(this.username, this.password) 
      .subscribe(data => {
        this.router.navigate(['profile']);
      }, err => {
        this.errorMessage = "error : Username or password is incorrect";
      }
    )
  }
}
