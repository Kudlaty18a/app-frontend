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

  model: any = {};
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model.email, this.model.password) 
      .subscribe(data => {
        this.router.navigate(['profile']);
      }
    )
  }
}
