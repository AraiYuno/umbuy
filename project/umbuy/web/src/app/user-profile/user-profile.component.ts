import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: any;
  constructor(public auth: AuthService,public router: Router) { }

  ngOnInit() {
          
    this.auth.getProfile((err, profile) => {
      this.profile = profile;
      
    });
  }

  getUserData() {
    return JSON.stringify(this.profile);
  }

  getNickName() {
    return this.profile['nickname'];
  }

  getFirstName() {
    return this.profile['https://metadata/user_metadata']['FirstName'];
  }
  getLastName() {
    return this.profile['https://metadata/user_metadata']['LastName'];
  }

  getPicture() {
    return this.profile['picture'];
  }
  getPhoneNo() {
    return this.profile['https://metadata/user_metadata']['phone'];
  }

  goHome() {
    this.router.navigate(['/']);
  }


  getEmail() {
   return this.profile.name;
 }}
