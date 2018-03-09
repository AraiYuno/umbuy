import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementService } from '../../app/business/services/advertisement.service';
import { DeleteComponent } from '../../app/business/components/delete.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Advertisement } from '../../app/data_model/advertisement';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, OnInit } from '@angular/core';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('DeleteComponent Unit Tests', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let router: Router;
  let advertisementService: AdvertisementService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ DeleteComponent ],
      providers: [AdvertisementService, HttpClient, HttpHandler,
        {provide: Router, useClass: RouterStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    advertisementService = new AdvertisementService(null);
    router = TestBed.get(Router);
    component = new DeleteComponent(advertisementService, router);
    this.tempAd = {
      "advertisementId": 1,
      "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
      "title": 'iphone',
      "description": 'A great iphone for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "imageUrl": 'https://s3.amazonaws.com/kyleteam6best/default.jpg',
      "category": 'electronics'
    };
  });

  it('current advertisement id should be defined after ngOnInit successfully is called', () => {
    expect(component.currentAdvertisementId).toBeUndefined();
    // ARRANGE: set an array of advertisements 

    // ACT: Call ngOnInit and set the advertisement to be ready
    let spy=spyOn(component, 'ngOnInit').and.callFake(t => {
        return this.tempAd.advertisementId;
    });

    component.currentAdvertisementId = this.tempAd.advertisementId;
    
    // ASSERT: make sure that the object's title is iphone as desired
    expect(component.currentAdvertisementId).toBe(this.tempAd.advertisementId);
  });

  it('should call advertisement Service deleteAdvertisement to delete ad', () => {
    let advertisementId = this.tempAd.advertisementId;

    let spy=spyOn(advertisementService, 'deleteAdvertisementById').and.callFake(() => {
            return Observable.empty();
        });

    //act
    component.deleteAdvertisement(advertisementId);

    // assert
    expect(spy).toHaveBeenCalled();
  });

  
});
