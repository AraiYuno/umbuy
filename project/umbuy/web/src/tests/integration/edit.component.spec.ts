import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EditComponent } from '../../app/business/edit.component';
import { AdvertisementService } from '../../app/persistence/advertisement.service';
import { UserService } from '../../app/persistence/user.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../../app/data_model/advertisement';
import { User } from '../../app/data_model/user';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../app/shared/auth.service';
import { FormsModule } from '@angular/forms';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('EditComponent Integration Tests', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let advertisementService: AdvertisementService;
  let authService: AuthService;
  let userService: UserService;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ EditComponent ],
      providers: [AdvertisementService, AuthService, UserService, User, Advertisement, HttpClient, HttpHandler,
        { provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    authService = TestBed.get(AuthService);
    advertisementService = TestBed.get(AdvertisementService);
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should redirect the user back to my ads page after validating advertisement', () => {
    component.userId = this.tempUser.user_id;
    let spy = spyOn(router, 'navigate');

    component.backToMyAdsPage();

    expect(spy).toHaveBeenCalledWith(['/view/ads/user/' + this.tempUser.user_id]);
    
  });

  it('should edit the ad and return from the server', () => {
    // arrange
    let spy = spyOn(advertisementService, 'editAdvertisement').and.returnValue( Observable.from([this.tempAd]));

    // act
    component.editAdvertisement();

    // assert
    expect(component.res).toBe(this.tempAd);
  });
  
  it('should set the message property if server returns an error when adding editing an advertisement', () => {
    let error = 'error from the server'
    // arrange
    let spy = spyOn(advertisementService, 'editAdvertisement').and.returnValue( Observable.throw(error)); 

    // act
    component.editAdvertisement();

    // assert
    expect(component.error).toBe(error);
  });
  
  it('should send the ad information that is rendered on the screen to the database', () => {
    component.currentAdvertisementId = this.tempAd.advertisementId;
    component.title = this.tempAd.title;
    component.description = this.tempAd.description;
    component.price = this.tempAd.price;
    component.category = this.tempAd.category;
    component.imageUrl = this.tempAd.imageUrl;
    component.editAdvertisement();
    fixture.detectChanges();

    expect(component.newAd.advertisementId).toBe(this.tempAd.advertisementId);
    expect(component.newAd.title).toBe(this.tempAd.title);
    expect(component.newAd.description).toBe(this.tempAd.description);
    expect(component.newAd.price).toBe(this.tempAd.price);
    expect(component.newAd.category).toBe(this.tempAd.category);
    expect(component.newAd.imageUrl).toBe(this.tempAd.imageUrl);
  });
 
  it('should render the user information of the ad', () => {
    component.editable = true;
    component.advertisement = this.tempAd;
    component.user = this.tempUser;
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    
    fixture.detectChanges();
    
    //user's full name
    let debugElement = fixture.debugElement.query(By.css('#userFullName'));
    let nameElement: HTMLElement = debugElement.nativeElement;
    expect(nameElement.innerHTML).toContain("Bob LeBob");

    //user's email
    debugElement = fixture.debugElement.query(By.css('#userEmail'));
    let emailElement: HTMLElement = debugElement.nativeElement;
    expect(emailElement.innerHTML).toContain("bob@myumanitoba.ca");

    //user's phone number
    debugElement = fixture.debugElement.query(By.css('#userPhoneNumber'));
    let phoneNumberElement: HTMLElement = debugElement.nativeElement;
    expect(phoneNumberElement.innerHTML).toContain("2049876543");
  });

});
