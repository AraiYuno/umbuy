import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(public auth: AuthService, public router: Router) { }

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
