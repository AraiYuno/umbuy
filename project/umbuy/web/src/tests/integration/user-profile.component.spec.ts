import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../app/business/services/advertisement.service';
import { Advertisement } from '../../app/data_model/advertisement';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Routes, RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/business/services/auth.service'
import { UserProfileComponent } from '../../app/business/components/user-profile.component';
import { UserService } from '../../app/business/services/user.service';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('UserProfileComponent Integration Tests', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authService: AuthService;
  let router: Router;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule, FormsModule ],
        declarations: [ UserProfileComponent ],
        providers: [AdvertisementService, AuthService, UserService, HttpClient, HttpHandler,
          { provide: Router, useClass: RouterStub}]
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    authService = TestBed.get(AuthService);
    router = TestBed.get(Router);
    component = fixture.componentInstance;


    this.tempAd = { 
      "advertisementId": 1,
      "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
      "title": 'iphone',
      "description": 'A great iphone for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "deleted_on": null,
      "imageUrl": 'http://alink.com',
      "category": 'electronics'
    };

    this.tempUser = { 
      "email":"bob@myumanitoba.ca",
      "user_metadata":{"FirstName":"Bob",
                        "LastName":"Bob LeBob",
                        "phone":"2049876543"},
      "picture":"http://alink.com",
      "user_id":"auth0|5a8c83dc5c679b178110477c"
    };
  });

  it('should call router with /view/ads/user/auth0|5a8cfd24f5c8213cb27d5ec2', () => {
    // Arrange: set up component's userId
    var userId = this.tempAd.userId;
    
    // ACT: navigate to 'view/ads'
    let spy = spyOn(router, 'navigate');
    router.navigate(['/view/ads/user/' + userId]);

    // ASSERTION: router should have been called with /view/ads/user/auth0|5a8cfd24f5c8213cb27d5ec2
    expect(spy).toHaveBeenCalledWith(['/view/ads/user/auth0|5a8cfd24f5c8213cb27d5ec2']); 
  });
  
});
