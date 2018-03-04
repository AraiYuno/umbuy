import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
//import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: '../presentation/html/app.component.html',
  styleUrls: ['../presentation/css/app.component.scss']
})
export class AppComponent {
  title = 'UmBuy';
  profile: any;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }



}

