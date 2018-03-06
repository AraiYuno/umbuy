import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../app/business/advertisement.service';
import { FilterResultService } from '../../app/shared/filterResult.service';
import { AllResultService } from '../../app/shared/allResult.service';
import { ViewAdsComponent } from '../../app/business/view-ads.component';
import { SearchComponent } from '../../app/business/search.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../../app/data_model/advertisement';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { FormsModule } from '@angular/forms';
import { AuthService} from '../../app/shared/auth.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('ViewAdsComponent Unit Tests', () => {
  let component: ViewAdsComponent;
  let advertisementService: AdvertisementService;
  let allResultService: AllResultService;
  let filterResultService: FilterResultService;
  let fixture: ComponentFixture<ViewAdsComponent>;
  let tempAd: Advertisement;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ ViewAdsComponent, SearchComponent ],
      providers: [AdvertisementService, FilterResultService, AuthService, AllResultService, HttpClient, HttpHandler,
        { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate");} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdsComponent);
    advertisementService = new AdvertisementService(null);
    filterResultService = new FilterResultService();
    allResultService = new AllResultService();
    component= new ViewAdsComponent(advertisementService, filterResultService, allResultService, authService);

    this.tempAd = [{ 
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
    }, {
      "advertisementId": 2,
      "userId": 1,
      "title": 'Galaxy',
      "description": 'A great Galaxy for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "deleted_on": null,
      "imageUrl": 'http://alink.com',
      "category": 'electronics'
    }];
  });


  it('When ViewAdComponent is initiated, advertisements should be defined.', () => {
    
      // after calling advertisementService getAdvertisementById function fakedly, 
      let spy=spyOn(advertisementService, 'getAllAdvertisements').and.callFake(t => {
        return Observable.from([this.tempAd]);
      });

      component.advertisements = this.tempAd;

      // we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
      expect(component.advertisements[0].title).toMatch("iphone");
    //});
  });

  it('showReducedDescriptionLength() should display shorted description', () => {
    // ACT: call the testing function
    component.showReducedDescriptionLength(this.tempAd[0].description, 7);

    //ASSERT: we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
    expect(component.test_shorted_description).toMatch('A great...');
  });

  it('filetedAds list should be defined after ngOnInit successfully is called', () => {
    expect(component.filteredAds).toBeUndefined();
    // ARRANGE: set an array of advertisements 
    // ACT: Call ngOnInit and set the filteredAds Advertisement [] to be ready
    let spy=spyOn(component, 'ngOnInit').and.callFake(t => {
        return Observable.from([this.tempAd]);
    });

    component.filteredAds = this.tempAd;
    
    // ASSERT: make sure that the first object's title is 'iphone' as desired
    //         make sure that the second object's title is 'Galaxy' as desired.
    expect(component.filteredAds[0].title).toMatch("iphone");
    expect(component.filteredAds[1].title).toMatch("Galaxy");
  });

});