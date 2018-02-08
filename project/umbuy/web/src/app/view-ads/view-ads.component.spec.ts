import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { ViewAdsComponent } from './view-ads.component';
import { SearchComponent } from '../search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ViewAdsComponent', () => {
  let component: ViewAdsComponent;
  let service: AdvertisementService
  let fixture: ComponentFixture<ViewAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ViewAdsComponent ],
      providers: [AdvertisementService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdsComponent);
    component = fixture.componentInstance;
    service= TestBed.get(AdvertisementService);
    fixture.detectChanges();
  });

  it('When initiated, ViewAdsComponent and getAllAdvertisements should be defined.', () => {
    expect(component).toBeTruthy();
    expect(service.getAllAdvertisements).toBeDefined();
  });


  
  it('When view-ads page is initiated, it should get getAlladvertisements to display them', () => {
    let spy=spyOn(service, 'getAllAdvertisements').and.callFake(t => {
      return Observable.empty();
    });
    component.ngOnInit(); 
    expect(spy).toHaveBeenCalled();
  });

  it('should get the mock advertisement retrieved from the database on the server', () => {
    let results;
    //get the results
    let spy=spyOn(service, 'getAllAdvertisements').and.callFake(t => {
      return Observable.from([results]);
    });
    //Act
     component.ngOnInit();
     //assertion
     expect(component.advertisements).not.toBeNull();
 });

  
  it('Should display the correspoding error message if the server does not return the data properly', () => {
    let error='error';
    let spy=spyOn(service, 'getAllAdvertisements').and.returnValue(Observable.throw(error));
    component.ngOnInit();
    console.log(component.message);
    expect(component.message).toBe(error);
 });

});
