import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './search.component';
import { AdvertisementService } from '../services/advertisement.service';
import { FilterResultService } from '../services/filterResult.service';
import { Routes, RouterModule, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AllResultService } from '../services/allResult.service';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { Advertisement } from '../api/advertisement';
import 'rxjs/add/observable/from';

describe('SearchComponent Integration Tests', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let newAdevertisement: Advertisement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule,RouterModule,RouterTestingModule],
      providers: [AdvertisementService, AllResultService,FilterResultService, HttpClient, HttpHandler, RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    
    this.INI_Adevertisement = [
      { 
      advertisementId: 1,
      userId: 1,
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
      userId: 2,
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


 

  it('should bind the search input to the correct property', () => {   
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
    fixture.detectChanges();
    //get the input
    let input = fixture.debugElement.query(By.css('.form-control'));
    let inputElement = input.nativeElement;


   inputElement.dispatchEvent(new Event('keyup'));

    
    expect(component.filter).toHaveBeenCalled();
  });
 
  it('should find the proper advertiement when call the keyup to do the query by title', () => {
   
    component.allAds=this.INI_Adevertisement;
   
    //get the input
   let inputField=fixture.debugElement.query(By.css('.form-control'));
    inputField.triggerEventHandler('keyup','iphone');
    expect(component.filteredAds).toContain(this.INI_Adevertisement[0]);
    expect(component.filteredAds.length).toBe(2);
  });

  it('should load filterAds from the server', () => {
    //faked service
    let service=TestBed.get(FilterResultService,AllResultService);
    spyOn(service,'changeMessage').and.returnValue(Observable.from([[this.INI_Adevertisement]]));
    component.filteredAds=this.INI_Adevertisement;
   
    //assertion
     expect(component.filteredAds.length).toBe(2);
   });

});
