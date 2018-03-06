import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AdvertisementService } from '../../app/business/advertisement.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../app/business/user.service';
import { ViewAdInformationComponent } from '../../app/business/view-ad-information.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ViewAdsComponent } from '../../app/business/view-ads.component';
import { Advertisement } from '../../app/data_model/advertisement';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { AuthService } from '../../app/shared/auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewAdInformationComponent Unit Tests', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;
  let viewAdsComponent: ViewAdsComponent;
  let tempAd: Advertisement;  
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, RouterTestingModule],
      declarations: [ ViewAdInformationComponent ],
      providers: [AdvertisementService, UserService, AuthService, HttpClient, HttpHandler,
            { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate")} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    advertisementService= TestBed.get(AdvertisementService);
    userService = TestBed.get(UserService);
    authService = TestBed.get(AuthService);
    component= new ViewAdInformationComponent(advertisementService, userService, authService);
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
  });


  it('getAdvertisementId() should be getting the id with a given path', () => {
    // after calling advertisementService getAdvertisementById function fakedly, 
    let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
      return Observable.from([this.tempAd]);
      });
      // we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
    expect(component.getAdvertisementId('view/ads/1')).toContain(String(this.tempAd.advertisementId));
  });

  afterEach(()=>{});
  
  it('When convertToDatestoText() is called, corresponding format should be returned', () => {

    //ARRANGE: call getAdvertisementById 
    let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
      return Observable.from([this.tempAd]);
    });

    //ACT: call the converDatestoText function
    component.convertDatesToText(this.tempAd);
    //ASSERT: see if the created_on from the component matches with the expected output
    expect(component.created_on).toMatch("January 1, 2018");
    expect(component.last_updated).toMatch('January 1, 2018');
    expect(component.deleted_on).toMatch('');
    expect(component.isDeleted).toBeFalsy();
  }); // afterEach
  afterEach(()=>{});
    

  it('When convertToTextDate() is called, Date object should be converted to text', () => {
    // faked call for getting an advertisement
    let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
      return Observable.from([this.tempAd]);
    });

    //ACT: call the converDatestoText function
    let testDate = component.convertToTextDate("2018-01-01");
    
    //ASSERT: see if the created_on from the component matches with the expected output
    expect(testDate).toMatch("January 1, 2018");
  });

});