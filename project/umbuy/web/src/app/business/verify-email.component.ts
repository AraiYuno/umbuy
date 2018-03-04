import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: '../presentation/html/verify-email.component.html',
  styleUrls: ['../presentation/css/verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(public auth: AuthService,public router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['/']);
  }

}
