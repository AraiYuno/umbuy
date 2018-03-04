import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../../app/shared/auth.service';
import { AdvertisementService } from '../../app/persistence/advertisement.service';
import { UserService } from '../../app/persistence/user.service';
import { EditComponent } from '../../app/business/edit.component';
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
import { FilterResultService } from '../../app/shared/filterResult.service';
import { AllResultService } from '../../app/shared/allResult.service';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('EditComponent Unit Tests', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let allResultService: AllResultService;
  let filterResultService: FilterResultService;
  let router: Router;
  let advertisementService: AdvertisementService;
  let userService: UserService;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ EditComponent ],
      providers: [AdvertisementService, FilterResultService, UserService, AuthService, AllResultService, HttpClient, HttpHandler,
        { provide: Router, useClass: RouterStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    advertisementService = new AdvertisementService(null);
    userService = new UserService(null);
    authService = new AuthService(null);
    router = TestBed.get(Router);
    component = new EditComponent(advertisementService, userService, authService, router);
    this.ad1 = {
      "advertisementId": 1,
      "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
      "title": 'iphone',
      "description": 'A great iphone for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-01',
      "deleted_on": null,
      "imageUrl": 'https://s3.amazonaws.com/kyleteam6best/default.jpg',
      "category": 'electronics'
    };
    this.ad2 = {
      "advertisementId": 1,
      "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
      "title": 'iphone',
      "description": 'A great iphone for a great price',
      "price": 75,
      "created_on": '2018-01-01',
      "last_updated": '2018-01-02',
      "deleted_on": '2018-01-03',
      "imageUrl": 'https://s3.amazonaws.com/kyleteam6best/default.jpg',
      "category": 'electronics'
    };
  });

  it('advertisement should be defined after ngOnInit successfully is called', () => {
    expect(component.advertisement).toBeUndefined();
    // ARRANGE: set an array of advertisements 

    // ACT: Call ngOnInit and set the advertisement to be ready
    let spy=spyOn(component, 'ngOnInit').and.callFake(t => {
        return Observable.from([this.ad1]);
    });

    component.advertisement = this.ad1;
    
    // ASSERT: make sure that the object's title is iphone as desired
    expect(component.advertisement.title).toMatch("iphone");
  });

  it('should retrieve the id of the advertisement in getAdvertisementId', () => {
    var url = "/view/ads/2";
    
    var advertisementId = component.getAdvertisementId(url);

    expect(advertisementId).toBe('2'); 
  });

  it('should convert the created_on, last_updated and deleted_on dates to string date', () => {
    component.convertDatesToText(this.ad2);
    
    expect(component.created_on).toBe("January 1, 2018");
    expect(component.last_updated).toBe("January 2, 2018");
    expect(component.deleted_on).toBe("January 3, 2018");
    expect(component.isDeleted).toBe(true); 
  });

  it('should change isDeleted to false if deleted_on is null', () => {
    component.convertDatesToText(this.ad1);
     
    expect(component.isDeleted).toBe(false); 
  });

  it('should return a date in string format for convertToTextDate', () => {
    var date = '2018-05-02'; //May 2, 2018
  
    var stringDate = component.convertToTextDate(date);

    expect(stringDate).toBe("May 2, 2018"); 
  });

  it('should be a successful ad and validAdMsg should be empty when activate Submit', () => {
    component.title = this.ad1.title;
    component.description = this.ad1.description;
    component.price = this.ad1.price;
    component.category = this.ad1.category;
  
    
    component.activateSubmit();

    expect(component.createAdSuccess).toBe(true); 
    expect(component.validAdMsg).toBe("");
  });

  it('should be an unsuccessful ad and validAdMsg should be error message when activate Submit', () => {
    component.title = null;
  
    component.activateSubmit();

    expect(component.createAdSuccess).toBe(false); 
    expect(component.validAdMsg).toContain("Please fill in all the fields.");
  });
   
  it('should initialize the variables of the advertisement', () => {
    
    component.initializeFields(this.ad2);
     
    expect(component.title).toBe("iphone");
    expect(component.price).toBe(75);
    expect(component.description).toContain("A great iphone");
    expect(component.category).toBe("electronics");
    expect(component.imageUrl).toBe("https://s3.amazonaws.com/kyleteam6best/default.jpg");
  });

  it('should call advertisement Service editAdvertisement to edit ad', () => {
    // arrange part, want create fake
    component.userId = this.ad1.userId;
    
    let spy=spyOn(advertisementService, 'editAdvertisement').and.callFake(() => {
            return Observable.empty();
        });

    //act
    component.editAdvertisement();

    // assert
    expect(spy).toHaveBeenCalled();
  });

  
});
