import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { FilterResultService } from '../services/filterResult.service';
import { AllResultService } from '../services/allResult.service';
import { AuthService } from '../auth/auth.service';
import { ViewAdsComponent } from './view-ads.component';
import { SearchComponent } from '../search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../api/advertisement';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ViewAdsComponent Unit Tests', () => {
  let component: ViewAdsComponent;
  let advertisementService: AdvertisementService;
  let allResultService: AllResultService;
  let filterResultService: FilterResultService;
  let authService: AuthService;
  let fixture: ComponentFixture<ViewAdsComponent>;
  let tempAd: Advertisement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule],
      declarations: [ ViewAdsComponent, SearchComponent ],
      providers: [AdvertisementService, FilterResultService, AllResultService, AuthService, HttpClient, HttpHandler, RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdsComponent);
    advertisementService= TestBed.get(AdvertisementService);
    filterResultService = TestBed.get(FilterResultService);
    allResultService = TestBed.get(AllResultService);
    authService = TestBed.get(AuthService);
    component= new ViewAdsComponent(advertisementService, filterResultService, allResultService, authService);

    this.tempAd = [{ 
      "advertisementId": 1,
      "userId": "auth0|5a8cfd24f5c8213cb27d5ec2",
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
      "userId": "auth0|5a8c83dc5c679b178110477c",
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

  it('showReducedDescriptionLength() should display shorted description', () => {
    // ARRANGE: get the advertisement by its id.
    let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
      return Observable.from([this.tempAd]);
    });

    // ACT: call the testing function
    component.showReducedDescriptionLength(this.tempAd[0].description, 7);
    //ASSERT: we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
    expect(component.test_shorted_description).toMatch('A great...');
  });

  it('filteredAds list should be defined after ngOnInit successfully is called', () => {
    expect(component.filteredAds).toBeUndefined();
    // ARRANGE: set an array of advertisements 
    // ACT: Call ngOnInit and set the filteredAds Advertisement [] to be ready
    let spy=spyOn(component, 'ngOnInit').and.callFake(t => {
        return Observable.from([this.tempAd]);
    });

    component.filteredAds = this.tempAd;
    fixture.detectChanges();

    // ASSERT: make sure that the first object's title is 'iphone' as desired
    //         make sure that the second object's title is 'Galaxy' as desired.
    expect(component.filteredAds[0].title).toMatch("iphone");
    expect(component.filteredAds[1].title).toMatch("Galaxy");
  });

});