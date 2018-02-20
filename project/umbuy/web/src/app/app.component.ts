import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
//import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  profile: any;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }



}

