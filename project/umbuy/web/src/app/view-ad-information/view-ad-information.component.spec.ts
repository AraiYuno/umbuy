import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { ViewAdInformationComponent } from './view-ad-information.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ViewAdsComponent } from '../view-ads/view-ads.component';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Advertisement } from '../api/advertisement';

describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;
  let viewAdsComponent: ViewAdsComponent;
  let tempAd: Advertisement;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ViewAdInformationComponent ],
      providers: [AdvertisementService, UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    advertisementService= TestBed.get(AdvertisementService);
    userService = TestBed.get(UserService);
    component= fixture.componentInstance;

    //fixture = TestBed.createComponent(ViewAdInformationComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create ViewAdInformationComponent app when initiated', () => {
    expect(component).toBeTruthy();
  });


  it('getAdvertisementId() should be getting the id with a given path', () => {
    //fakeAsync(() =>  {
      component.ngOnInit();
      //tick();
      let results;
      // after calling advertisementService getAdvertisementById function fakedly, 
      let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
        return Observable.from([results]);
      });
      // we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
      expect(component.getAdvertisementId('view/ads/1')).toMatch("1");
    //});
  });


  it('When convertToTextDate() is called, corresponding format should be returned', () => {
    fakeAsync(() =>  {
      let tempAd = { 
        id: 1,
        userId: 1,
        title: 'iphone',
        description: 'A great iphone for a great price',
        price: 75.19,
        created_on: new Date('2018-01-01'),
        last_updated: new Date('2018-01-01'),
        deleted_on: new Date(),
        imageUrl: 'http',
        category: 'electronics'
      };
      let text;
      // pass a sample date to the function
      let spy=spyOn(advertisementService, 'getAllAdvertisements').and.callFake(t => {
        return Observable.from([text]);
      });
      component.ngOnInit();
      tick();
      // assert that the text matches the format
      expect(component.convertDatesToText(tempAd)).toMatch('Janaury 01, 2018');
    });
  });

  it('When ngOnInit() is called, currentAdvertisementId and pathNameUrl should be defined', () => {
    fakeAsync(() =>  {
      component.ngOnInit();
      tick();

      // when ngOnInit is called, the advertisementId should never be 0 and pathNameUrl shouldn't be undefined.
      expect(component.pathNameUrl).toBeDefined();
      expect(component.pathNameUrl).not.toEqual('');
      expect(component.currentAdvertisementId).toBeDefined();
      expect(component.currentAdvertisementId).toBeGreaterThan(0);
    });
  });

});