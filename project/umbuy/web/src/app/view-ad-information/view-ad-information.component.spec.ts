import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ViewAdInformationComponent } from './view-ad-information.component';
import { AdvertisementService } from '../services/advertisement.service';
import { UserService } from '../services/user.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { RouterTestingModule } from '@angular/router/testing';


describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;
  let tempAd: Advertisement; 
  let tempUser: User; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [ ViewAdInformationComponent],
      providers: [AdvertisementService, UserService, HttpClient, HttpHandler, RouterModule]
    })
    .compileComponents();
 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdInformationComponent);
    component = fixture.componentInstance;
    
    this.tempAd = { 
      "advertisementId": 1,
      "userId": 1,
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
      "userId": 1,
      "firstName": "Bob",
      "lastName": 'LeBob',
      "umEmail": 'bob@myumanitoba.ca',
      "phoneNumber": 2049876543
    };
  });

  it('should render the ad information of the ad', () => {
    component.advertisement = this.tempAd;
    component.user = this.tempUser;
    component.created_on = component.convertToTextDate(component.advertisement.created_on);
    component.last_updated = component.convertToTextDate(component.advertisement.last_updated);
    //component.advertisement.deleted_on is null
    component.deleted_on = component.convertToTextDate(component.advertisement.deleted_on);
    fixture.detectChanges();

    //ad's title
    let debugElement = fixture.debugElement.query(By.css('#title'));
    let titleElement: HTMLElement = debugElement.nativeElement;
    expect(titleElement.innerText).toBe("iphone");

    //ad's description
    debugElement = fixture.debugElement.query(By.css('#description'));
    let descriptionElement: HTMLElement = debugElement.nativeElement;
    expect(descriptionElement.innerText).toContain("a great price");

    //ad's src attribute in image
    debugElement = fixture.debugElement.query(By.css('#image'));
    let srcElement: HTMLElement = debugElement.nativeElement;
    expect(srcElement.getAttribute('src')).toBe("http://alink.com");

    //ad's alt attribute in image
    debugElement = fixture.debugElement.query(By.css('#image'));
    let altElement: HTMLElement = debugElement.nativeElement;
    expect(altElement.getAttribute('alt')).toBe("iphone");

    //ad's created on date
    debugElement = fixture.debugElement.query(By.css('#created_on'));
    let createdOnElement: HTMLElement = debugElement.nativeElement;
    expect(createdOnElement.innerText).toContain("January 1, 2018");

    //ad's last updated on date
    debugElement = fixture.debugElement.query(By.css('#last_updated'));
    let lastUpdatedOnElement: HTMLElement = debugElement.nativeElement;
    expect(lastUpdatedOnElement.innerText).toContain("January 1, 2018");

    //component.advertisement.deleted_on is null
    debugElement = fixture.debugElement.query(By.css('#deleted_on'));
    //element with id deleted_on should be hidden
    expect(debugElement).toBe(null);

    //display the deleted date if date is not null
    component.deleted_on = component.convertToTextDate('2018-01-01');
    component.isDeleted = true;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('#deleted_on'));
    let deletedOnElement: HTMLElement = debugElement.nativeElement;
    //element with id deleted_on should be visible
    expect(deletedOnElement.innerHTML).toContain("January 1, 2018");

    //ad's price
    debugElement = fixture.debugElement.query(By.css('#price'));
    let priceElement: HTMLElement = debugElement.nativeElement;
    expect(priceElement.innerHTML).toContain("75");

    //ad's category
    debugElement = fixture.debugElement.query(By.css('#category'));
    let categoryElement: HTMLElement = debugElement.nativeElement;
    expect(categoryElement.innerHTML).toContain("electronics");
  });

  it('should render the user information of the ad', () => {
    component.advertisement = this.tempAd;
    component.user = this.tempUser;

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

  it('should get the ad with a given advertisement id from advertisementService', () => {
    let service = TestBed.get(AdvertisementService);
    spyOn(service, 'getAdvertisementById').and.returnValue(Observable.from([this.tempAd]));
    let ad = service.getAdvertisementById(this.tempAd.advertisementId);
  
    expect(ad.array.length).toBe(1);
    expect(ad.array[0].advertisementId).toBe(this.tempAd.advertisementId);
  });

  it('should get the user with a given user id from userService', () => {
    let service = TestBed.get(UserService);
    spyOn(service, 'getUserById').and.returnValue(Observable.from([this.tempUser]));
    let user = service.getUserById(this.tempUser.userId);
  
    expect(user.array.length).toBe(1);
    expect(user.array[0].userId).toBe(this.tempUser.userId);
  });

  it('should call router with /view/ads/{{advertisementId}}', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    router.navigate(['/view/ads/' + this.tempAd.advertisementId]);
    expect(spy).toHaveBeenCalledWith(['/view/ads/1']); 
  });

});