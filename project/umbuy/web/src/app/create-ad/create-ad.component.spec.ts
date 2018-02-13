import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { CreateAdComponent } from './create-ad.component';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Advertisement } from '../api/advertisement';
import { User } from '../api/user';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AdvertisementService } from '../services/advertisement.service';
import { RouterTestingModule } from '@angular/router/testing';
import { debug } from 'util';
import {CommonModule} from "@angular/common";
import { Component, OnInit } from '@angular/core';

// fake router
class RouterStub {
  navigate(params){
  }
}

describe('CreateAdComponent Integration Test', () => {
  let component: CreateAdComponent;
  let fixture: ComponentFixture<CreateAdComponent>;
  let router: Router;
  let service: AdvertisementService;
  let newAd1;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ CreateAdComponent ],
     //replace router class with router stub
      providers: [AdvertisementService, User, Advertisement, HttpClient, HttpHandler,
        { provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdComponent);
    service = TestBed.get(AdvertisementService);
    router = TestBed.get(Router);

    component = fixture.componentInstance;

    newAd1= { 
      userId: 1, 
      title: 'test1', 
      description: 'test2', 
      price: 23.14,
      imageUrl: 'https://s3.amazonaws.com/kyleteam6best/default.jpg',
      category: ' education'
    };
  });

  it('should get the title from the input field', () => {
   fixture.detectChanges(); 
   fixture.whenStable().then(() => {
    let input = fixture.debugElement.query(By.css('input[name="title"]'));
    
    let inputElement = input.nativeElement;
    
    inputElement.value = 'test1';
    inputElement.dispatchEvent(new Event('input'));
    
    expect(component.title).toBe('test1');
   });
  });

  it('should get the price from the input field', () => {
   fixture.detectChanges(); 
   fixture.whenStable().then(() => {
    let input = fixture.debugElement.query(By.css('input[name="price"]'));
   
    let inputElement = input.nativeElement;
    
    inputElement.value = 200;
    inputElement.dispatchEvent(new Event('input'));
       
    expect(component.price).toBe(200);
   });
  });
  it('should get the category from the input field', () => {
   fixture.detectChanges(); 
   fixture.whenStable().then(() => {
    let input = fixture.debugElement.query(By.css('input[name="category"]'));
   
    let inputElement = input.nativeElement;
    
    inputElement.value = 'education';
    inputElement.dispatchEvent(new Event('input'));
       
    expect(component.category).toBe('education');
   });
  });

 it('should get the description from the input field', () => {
   fixture.detectChanges(); 
   fixture.whenStable().then(() => {
    let input = fixture.debugElement.query(By.css('textarea[name="description"]'));
   
    let inputElement = input.nativeElement;
    
    inputElement.value = 'nice book';
    inputElement.dispatchEvent(new Event('input'));
       
    expect(component.description).toBe('nice book');
   });
  });

 it('should render errorMsg', () => {
   fixture.detectChanges(); 
    let input = fixture.debugElement.queryAll(By.css('p'))[0];
    let inputElement:HTMLElement = input.nativeElement;
       
    expect(inputElement.innerText).toBe('');
  });

  //test for (change) previewFile && uploadFile
  it('should not get image when no image has posted', () => {
    spyOn(component,'previewFile');
   spyOn(component,'uploadFile');
    fixture.detectChanges(); 
    fixture.whenStable().then(() => {
     let input = fixture.debugElement.query(By.css('input[name="imageUpload"]'));
    
     let inputElement = input.nativeElement;
     inputElement.dispatchEvent(new Event('change'));

        
     expect(component.hasImage).toBeFalsy();
    });
   });

  it('should have warning validAdMeg :"please fill in all the field,Image is optional "', () => {
    component.title=null;
    fixture.detectChanges(); 
  
     let button = fixture.debugElement.query(By.css('#postBtn'));
      button.triggerEventHandler('click', null);
     
      
        
     expect(component.validAdMsg).toContain('fill');
    
   });
  it('all the Ads infomation is not null, validMs should be ""', () => {
    component.title='test1';
    component.description='good price';
    component.price=20;
    component.category="education";
    fixture.detectChanges(); 
    // act
     let button = fixture.debugElement.query(By.css('#postBtn'));
      button.triggerEventHandler('click', null);
     
      //assertion
     expect(component.validAdMsg).toBe('');
    
   });

  it('should redirect the user back to the home page after post advertisement', () => {

    let spy = spyOn(router, 'navigate');

    component.backToHomePage();

    expect(spy).toHaveBeenCalledWith(['']);
    
  });

  it('should add the new  returned from the server', () => {
    // arrange
    let spy = spyOn(service, 'createAd').and.returnValue( Observable.from([newAd1])); 

    // act
    component.createAd();

    // assert
    expect(component.res).toBe(newAd1);
  });
  
  it('should set the message property if server returns an error when adding a new advertisement', () => {
    let error = 'error from the server';
    // arrange
    let spy = spyOn(service, 'createAd').and.returnValue( Observable.throw(error)); 

    // act
    component.createAd();

    // assert
    expect(component.error).toBe(error);
  });
  
  
});
