import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { FilterResultService } from '../services/filterResult.service';
import { AllResultService } from '../services/allResult.service';
import { ViewAdsComponent } from './view-ads.component';
import { SearchComponent } from '../search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../api/advertisement';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ViewAdsComponent', () => {
  let component: ViewAdsComponent;
  let advertisementService: AdvertisementService
  let allResultService: AllResultService;
  let filterResultService: FilterResultService;
  let fixture: ComponentFixture<ViewAdsComponent>;

  let tempAd: Advertisement;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ViewAdsComponent ],
      providers: [AdvertisementService, FilterResultService, AllResultService, HttpClient, HttpHandler, RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdsComponent);
    advertisementService= TestBed.get(AdvertisementService);
    filterResultService = TestBed.get(FilterResultService);
    allResultService = TestBed.get(AllResultService);
    component= new ViewAdsComponent(advertisementService, filterResultService, allResultService);

    this.tempAd = { 
      id: 1,
      userId: 1,
      title: 'iphone',
      description: 'A great iphone for a great price',
      price: 75,
      created_on: new Date('2018-01-02'),
      last_updated: new Date('2018-01-02'),
      deleted_on: null,
      imageUrl: 'http',
      category: 'electronics'
    };
  });


  it('When ViewAdComponent is initiated, filteredAds and advertisements should be defined.', () => {
    //fakeAsync(() =>  {
      //tick();
    
      // after calling advertisementService getAdvertisementById function fakedly, 
      let spy=spyOn(advertisementService, 'getAllAdvertisements').and.callFake(t => {
        return Observable.from([this.tempAd]);
      });

      component.ngOnInit();
      // we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
      expect(component.filteredAds).toBeDefined();
      expect(component.advertisements).toBeDefined();
    //});
  });

  it('showReducedDescriptionLength() should display shorted description', () => {
    // ARRANGE: get the advertisement by its id.
    let spy=spyOn(advertisementService, 'getAdvertisementById').and.callFake(t => {
      return Observable.from([this.tempAd]);
    });

    // ACT: call the testing function
    component.showReducedDescriptionLength(this.tempAd.description, 7);
    //ASSERT: we should be able to retrieve the advertisementId by calling getAdvertisementId() in the component.
    expect(component.test_shorted_description).toMatch('A great...');
  });
});