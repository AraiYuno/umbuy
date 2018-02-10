import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdComponent } from './create-ad.component';
import { MysqlService } from '../services/mysql.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdvertisementService } from '../services/advertisement.service';

describe('CreateAdComponent', () => {
  let component: CreateAdComponent;
  let fixture: ComponentFixture<CreateAdComponent>;
  let service: AdvertisementService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule],
      declarations: [ CreateAdComponent ],
      providers: [AdvertisementService, User, Advertisement, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdComponent);
    service = TestBed.get(AdvertisementService);
    component = new CreateAdComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call server to save the changes when an advertisement is created', () => {
    // arrange
    let spy = spyOn(service, 'createAd').and.callFake(ad => {
      return Observable.empty();
    });

    // act
    component.createAd();

    // assert
    expect(spy).toHaveBeenCalled();
  });
  
  it('should add the new  returned from the server', () => {
    // arrange
    let newAd = { 
      userId: 1, 
      title: 'luffy', 
      description: 'test', 
      price: 23.14,
      imageUrl: 'https://myanimelist.cdn-dena.com/images/characters/9/310307.jpg',
      category: ' test'
    };
    let spy = spyOn(service, 'createAd').and.returnValue( Observable.from([newAd])); 

    // act
    component.createAd();

    // assert
    expect(component.res).toBe(newAd);
  });
  
  it('should set the message property if server returns an error when adding a new advertisement', () => {
    let error = 'error from the server'
    // arrange
    let spy = spyOn(service, 'createAd').and.returnValue( Observable.throw(error)); 

    // act
    component.createAd();

    // assert
    expect(component)
  });

});
