import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { EditComponent } from './edit.component';
import { AdvertisementService } from '../services/advertisement.service';
import { UserService } from '../services/user.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth/auth.service';
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
  
  // it('should render the ad information of the ad', () => {
  //   spyOn(authService, 'isAuthenticated').and.returnValue(true);

  //   component.advertisement = this.tempAd;
  //   component.user = this.tempUser;
  //   component.created_on = component.convertToTextDate(component.advertisement.created_on);
  //   component.last_updated = component.convertToTextDate(component.advertisement.last_updated);

  //   //component.advertisement.deleted_on is null
  //   component.deleted_on = component.convertToTextDate(component.advertisement.deleted_on);
  //   fixture.detectChanges();

  //   //ad's title
  //   let debugElement = fixture.debugElement.query(By.css('#title'));
  //   let titleElement: HTMLElement = debugElement.nativeElement;
  //   expect(titleElement.innerText).toBe("iphone");

  //   //ad's description
  //   debugElement = fixture.debugElement.query(By.css('#description'));
  //   let descriptionElement: HTMLElement = debugElement.nativeElement;
  //   expect(descriptionElement.innerText).toContain("a great price");

  //   //ad's src attribute in image
  //   debugElement = fixture.debugElement.query(By.css('#image'));
  //   let srcElement: HTMLElement = debugElement.nativeElement;
  //   expect(srcElement.getAttribute('src')).toBe("http://alink.com");

  //   //ad's alt attribute in image
  //   debugElement = fixture.debugElement.query(By.css('#image'));
  //   let altElement: HTMLElement = debugElement.nativeElement;
  //   expect(altElement.getAttribute('alt')).toBe("iphone");

  //   //ad's created on date
  //   debugElement = fixture.debugElement.query(By.css('#created_on'));
  //   let createdOnElement: HTMLElement = debugElement.nativeElement;
  //   expect(createdOnElement.innerText).toContain("January 1, 2018");

  //   //ad's last updated on date
  //   debugElement = fixture.debugElement.query(By.css('#last_updated'));
  //   let lastUpdatedOnElement: HTMLElement = debugElement.nativeElement;
  //   expect(lastUpdatedOnElement.innerText).toContain("January 1, 2018");

  //   //component.advertisement.deleted_on is null
  //   debugElement = fixture.debugElement.query(By.css('#deleted_on'));
  //   //element with id deleted_on should be hidden
  //   expect(debugElement).toBeNull();

  //   //display the deleted date if date is not null
  //   component.deleted_on = component.convertToTextDate('2018-01-01');
  //   component.isDeleted = true;

  //   fixture.detectChanges();

  //   debugElement = fixture.debugElement.query(By.css('#deleted_on'));
  //   let deletedOnElement: HTMLElement = debugElement.nativeElement;
  //   //element with id deleted_on should be visible
  //   expect(deletedOnElement.innerHTML).toContain("January 1, 2018");

  //   //ad's price
  //   debugElement = fixture.debugElement.query(By.css('#price'));
  //   let priceElement: HTMLElement = debugElement.nativeElement;
  //   expect(priceElement.innerHTML).toContain("75");

  //   //ad's category
  //   debugElement = fixture.debugElement.query(By.css('#category'));
  //   let categoryElement: HTMLElement = debugElement.nativeElement;
  //   expect(categoryElement.innerHTML).toContain("electronics");
  // });

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
