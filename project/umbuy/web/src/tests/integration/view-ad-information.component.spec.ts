import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ViewAdInformationComponent } from '../../app/business/components/view-ad-information.component';
import { AdvertisementService } from '../../app/business/services/advertisement.service';
import { UserService } from '../../app/business/services/user.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../../app/data_model/advertisement';
import { User } from '../../app/data_model/user';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../app/business/services/auth.service';


describe('ViewAdInformationComponent Integration Tests', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let authService: AuthService;
  let userService: UserService;
  let router: Router;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [ ViewAdInformationComponent],
      providers: [AdvertisementService, AuthService, UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdInformationComponent);
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

  it('should render the ad information of the ad', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    component.advertisement = this.tempAd;
    component.user = this.tempUser;
    component.created_on = component.convertToTextDate(component.advertisement.created_on);
    component.last_updated = component.convertToTextDate(component.advertisement.last_updated);

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
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
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

  it('should show the edit button if the logged in user made the advertisement', () => {
    //the user created the advertisement
    component.editable = true;

    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();

    //edit button should be visible
    let debugElement = fixture.debugElement.query(By.css('#editButton'));

    let editElement: HTMLElement = debugElement.nativeElement;
  
    expect(debugElement).toBeTruthy();
    
  });

  it('should not show the edit button if the logged in user did not make the advertisement', () => {
    //the user did not make the advertisement
    component.editable = false;

    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();

    //edit button should not be visible
    let debugElement = fixture.debugElement.query(By.css('#editButton'));
    expect(debugElement).toBeNull(); 
  });

  it('should call router with /edit/ads/1', () => {
    // Arrange: set up component's userId
    var advertisementId = this.tempAd.advertisementId;
    
    // ACT: navigate to 'view/ads'
    let spy = spyOn(router, 'navigate');
    router.navigate(['/edit/ads/' + advertisementId]);

    // ASSERTION: router should have been called with /view/ads
    expect(spy).toHaveBeenCalledWith(['/edit/ads/1']); 
  });

});