import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { ViewAdsComponent } from './view-ads.component';
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
    service= new AdvertisementService(null);
    component= new ViewAdsComponent(service);

    //fixture = TestBed.createComponent(ViewAdsComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  
  it('When view-ads page is up, it should get getAlladvertisements to display them', () => {
    let spy=spyOn(service, 'getAllAdvertisements').and.callFake(t => {
      return Observable.empty();
    });

    component.ngOnInit(); 
    expect(spy).toHaveBeenCalled();
  });

  
  it('should set message property if server return and error', () => {
    let error='error';
    //arrange
  let spy=spyOn(service, 'getAllAdvertisements').and.returnValue(Observable.throw(error));
   //Act
    component.ngOnInit();
    console.log(component.message);
//assert
   expect(component.message).toBe(error);
 });
});
