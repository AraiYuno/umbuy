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

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [FormsModule],
      providers: [AdvertisementService, AllResultService,FilterResultService, HttpClient, HttpHandler, RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    
    this.INI_Adevertisement = [
      { 
      id: 1,
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
      id: 2,
      userId: 1,
      title: 'book',
      description: 'A great book for a great price',
      price: 100,
      created_on: new Date('2018-01-02'),
      last_updated: new Date('2018-01-02'),
      deleted_on: null,
      imageUrl: 'http/ads',
      category: 'eletronic'
    }  
  ];
    
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
  // xit('should call the filter method when keyup', () => {
  //   fixture.detectChanges();
  //   let title= 'iphone';
  //   //get the input
  //  let inputField=fixture.debugElement.query(By.css('.form-control'));
  //   inputField.triggerEventHandler('keyup','title')


  

    
  //   expect(component.filteredAds).toContain('iphone');
  // });
});
