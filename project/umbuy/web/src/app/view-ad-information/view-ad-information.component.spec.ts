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

describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;
  let viewAdsComponent: ViewAdsComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ViewAdInformationComponent ],
      providers: [AdvertisementService, UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    advertisementService= new AdvertisementService(null);
    userService = new UserService(null);
    component= new ViewAdInformationComponent(advertisementService, userService);
    viewAdsComponent= new ViewAdsComponent(advertisementService);

    //fixture = TestBed.createComponent(ViewAdInformationComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create ViewAdInformationComponent app when initiated', () => {
    expect(component).toBeTruthy();
  });


  it('Should be able to retrieve an advertisement by its Id', () => {
    fakeAsync(() =>  {
      component.ngOnInit();
      tick();
      let results;
      let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
        return Observable.from([results]);
      });
      expect(advertisementService.getAdvertisementById).toHaveBeenCalled();
    });
  });
    //Act
 //assert
 it('When getAdvertisementId() is called, it should retuan an advertisementId', () => {
  fakeAsync(() =>  {
    component.ngOnInit();
    tick();

    expect(component.pathNameUrl).toBeDefined();
    expect(component.pathNameUrl).not.toEqual('');
    expect(component.currentAdvertisementId).toBeDefined();
    expect(component.currentAdvertisementId).toBeGreaterThan(0);
  });
    // when the ngInit is called, 
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


  it('When convertToTextDate() is called, corresponding format should be returned', () => {
    fakeAsync(() =>  {
      let text
      // pass a sample date to the function
      let spy=spyOn(component, 'convertToTextDate').and.callFake(t => {
        return Observable.from([text]);
      });
      tick();
      expect(component.convertToTextDate).toHaveBeenCalled();
      // assert that the text matches the format
      expect(text).toMatch('Janaury 01, 2018');
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