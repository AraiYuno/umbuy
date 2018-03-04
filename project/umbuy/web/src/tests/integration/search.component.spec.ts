import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { SearchComponent } from '../../app/business/search.component';
import { AdvertisementService } from '../../app/persistence/advertisement.service';
import { FilterResultService } from '../../app/shared/filterResult.service';
import { AuthService } from '../../app/shared/auth.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllResultService } from '../../app/shared/allResult.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Advertisement } from '../../app/data_model/advertisement';
import 'rxjs/add/observable/from';

describe('SearchComponent Integration Tests', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let filterResultService: FilterResultService;
  let allResultService: AllResultService;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule, RouterModule, RouterTestingModule],
      providers: [AdvertisementService, AllResultService, AuthService, FilterResultService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(SearchComponent);
    filterResultService = TestBed.get(FilterResultService);
    allResultService = TestBed.get(AllResultService);
    authService = TestBed.get(AuthService);
    component = fixture.componentInstance;
    
    this.advertisements = [
      { 
      advertisementId: 1,
      userId: 'auth0|5a8cfd24f5c8213cb27d5ec2',
      title: 'iphone',
      description: 'A great iphone for a great price',
      price: 200,
      created_on: new Date('2018-02-02'),
      last_updated: new Date('2018-02-02'),
      deleted_on: null,
      imageUrl: 'http',
      category: 'education'
    },
    { 
      advertisementId: 2,
      userId: 'auth0|5a8cfd24f5c8213cb27d5ec2',
      title: 'book',
      description: 'A great book for a great price',
      price: 100,
      created_on: new Date('2018-01-02'),
      last_updated: new Date('2018-01-02'),
      deleted_on: null,
      imageUrl: 'http/ads',
      category: 'eletronic'
    }]; 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind the search input to the correct property', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);

    fixture.detectChanges();
    //get the input
      
    let input = fixture.debugElement.query(By.css('#inputBox'));
    
    let inputElement = input.nativeElement;

    inputElement.value = 'iphone';

   inputElement.dispatchEvent(new Event('input'));

    
    expect(component.query).toBe('iphone');
  });

  it('should call the filter method when keyup', () => {
     spyOn(component, 'filter');
     spyOn(authService, 'isAuthenticated').and.returnValue(true);
     fixture.detectChanges();
    //get the input
    let input = fixture.debugElement.query(By.css('.form-control'));
    let inputElement = input.nativeElement;


    inputElement.dispatchEvent(new Event('keyup'));

    
    expect(component.filter).toHaveBeenCalled();
  });
 
  it('should find the proper advertiement when call the keyup to do the query by title', () => {
    
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    
    fixture.detectChanges();
    //get the input
    let input=fixture.debugElement.query(By.css('.form-control'));
    let inputElement = input.nativeElement;
    component.allAds = this.advertisements;
    component.query = 'iphone';
    inputElement.dispatchEvent(new Event('keyup'));
    expect(component.filteredAds).toContain(this.advertisements[0]);
    expect(component.filteredAds.length).toBe(1);
  });

  it('should load filterAds from the server', () => {
    //faked service
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    
    fixture.detectChanges();
    let service=TestBed.get(FilterResultService);
    service.changeMessage(this.advertisements);
   
    //assertion
     expect(component.filteredAds.length).toBe(2);
   });

   it('should load allAds from the server', () => {
    //faked service
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    
    fixture.detectChanges();
    let service=TestBed.get(AllResultService);
    service.changeMessage(this.advertisements);
   
    //assertion
     expect(component.allAds.length).toBe(2);
   });

});
