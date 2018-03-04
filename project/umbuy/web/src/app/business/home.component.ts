import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: '../presentation/html/home.component.html',
  styleUrls: ['../presentation/css/home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login_check () {
    if(this.auth.isAuthenticated()) {
      return true;
    }
    else {
      return false;
    }
  }
}
