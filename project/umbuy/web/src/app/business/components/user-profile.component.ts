import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: '../../presentation/html/user-profile.component.html',
  styleUrls: ['../../presentation/css/user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: any;
  userId: string;
  errMessage: string;
  picture: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  constructor(private auth: AuthService, private _userService: UserService, private router: Router) { }

  ngOnInit() {   
    this.auth.getProfile((err, profile) => {
      this.userId = profile.sub;
      this.picture = profile.picture;
      this.firstName = profile['https://metadata/user_metadata']['FirstName'];
      this.lastName = profile['https://metadata/user_metadata']['LastName'];
      this.email = profile.name;
      this.phoneNumber = profile['https://metadata/user_metadata']['phone'];
    });

  }
  
  goHome() {
    this.router.navigate(['/']);
  }




}
