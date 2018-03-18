import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DeleteComponent } from '../../app/business/components/delete.component';
import { AdvertisementService } from '../../app/business/services/advertisement.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Advertisement } from '../../app/data_model/advertisement';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('DeleteComponent Integration Tests', () => {
  let component: DeleteComponent;
  let fixture: ComponentFixture<DeleteComponent>;
  let advertisementService: AdvertisementService;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ DeleteComponent ],
      providers: [AdvertisementService, Advertisement, HttpClient, HttpHandler,
        { provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteComponent);
    advertisementService = TestBed.get(AdvertisementService);
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

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should redirect the user back to the home page after deleting an advertisement', () => {
    let spy = spyOn(router, 'navigate');

    component.backToHomePage();

    expect(spy).toHaveBeenCalledWith(['']);
    
  });

  it('should delete the ad and return true', () => {
    // arrange
    let spy = spyOn(advertisementService, 'deleteAdvertisementById').and.returnValue( Observable.from([true]));

    // act
    component.deleteAdvertisement(this.tempAd.advertisementId);

    // assert true = has been deleted
    expect(component.res).toBe(true);
  });
  
  it('should set the error property if server returns an error when deleting an advertisement', () => {
    let error = 'error from the server';
    // arrange
    let spy = spyOn(advertisementService, 'deleteAdvertisementById').and.returnValue( Observable.throw(error)); 

    // act
    component.deleteAdvertisement(this.tempAd.advertisementId);

    // assert
    expect(component.err).toBe(error);
  });
  
});
