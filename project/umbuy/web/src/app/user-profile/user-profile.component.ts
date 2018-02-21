import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profile: any;

  userProfile: any;
  userId: string;
  errMessage: string;

  constructor(public auth: AuthService, public _userService: UserService,public router: Router) { }

  ngOnInit() {   
    this.auth.getProfile((err, profile) => {
      this.userProfile = profile;
      this.userId= this.userProfile['sub'];
    });

  }
  
  setProfile(profile){
    this.userProfile = profile;
 }

  getUserData() {
    return JSON.stringify(this.userProfile);
  }

  getNickName() {
    return this.userProfile['nickname'];
  }

  getFirstName() {
    return this.userProfile['https://metadata/user_metadata']['FirstName'];
  }
  getLastName() {
    return this.userProfile['https://metadata/user_metadata']['LastName'];
  }

  getPicture() {
    return this.userProfile['picture'];
  }
  getPhoneNo() {
    return this.userProfile['https://metadata/user_metadata']['phone'];
  }

  goHome() {
    this.router.navigate(['/']);
  }


  getEmail() {
   return this.userProfile.name;
 }

}
