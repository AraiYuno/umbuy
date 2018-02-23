import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserService } from '../services/user.service';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authService: AuthService;
  let router: Router;
  let httpClient: HttpClient;
  let httpHandler: HttpHandler;
  let userService: UserService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent],
      imports: [RouterModule],
      providers: [AuthService, UserService, Router, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    authService = TestBed.get(AuthService);
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
});
