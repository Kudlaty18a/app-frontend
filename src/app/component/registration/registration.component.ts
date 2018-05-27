import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../../model/model.user-account';
import { RegistrationService } from '../../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: UserAccount;

  constructor(public registrationService: RegistrationService, public router: Router) { }

  ngOnInit() {
    this.user = new UserAccount();
  }

  register() {
    this.registrationService.createAccount(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }

}
