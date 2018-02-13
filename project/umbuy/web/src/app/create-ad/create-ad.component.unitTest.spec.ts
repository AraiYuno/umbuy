import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdComponent } from './create-ad.component';
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
import { Router } from '@angular/router';
import { AdvertisementService } from '../services/advertisement.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CreateAdComponent Unit Tests', () => {
  let component: CreateAdComponent;
  let fixture: ComponentFixture<CreateAdComponent>;
  let router: Router;
  let service: AdvertisementService;
  let newAd;
  let fakeFile = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule, FormsModule, RouterTestingModule],
      declarations: [ CreateAdComponent ],
      providers: [AdvertisementService, User, Advertisement, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdComponent);
    service = TestBed.get(AdvertisementService);
    router = TestBed.get(Router);
    component = new CreateAdComponent(service, router);
    newAd = { 
      userId: 1, 
      title: 'luffy', 
      description: 'test', 
      price: 23.14,
      imageUrl: 'https://s3.amazonaws.com/kyleteam6best/default.jpg',
      category: ' test'
    };
    fakeFile = [
      {
        type: 'test/txt',
        size: 5000000-1
      },
      {
        type: 'image/jpeg',
        size: 5000000 + 1
      },
      {
        type: 'image/jpeg',
        size: 5000000 - 1
      },
    ]
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
  

  it ('should fail when given empty parameters for advertisement input fields', () => {
   
    component.activateSubmit();

    expect(component.createAdSuccess).toBeFalsy();
    expect(component.validAdMsg).toContain('fill');
  });

  
  it ('should succeed when given valid parameters for advertisement input fields', () => {
    component.title = 'somethign';
    component.description = 'test';
    component.price = 20;
    component.category = 'test';

    component.activateSubmit();

    expect(component.createAdSuccess).toBeTruthy();
    expect(component.validAdMsg).toBe('');
  });


  //UNIT TESTS FOR
  // uploadFile
  // previewFile
  // validateFile
  it ('should fail when given non valid file type for given file', () => {

    expect(component.validateFile(fakeFile[0])).toBeFalsy();
  });
 
  it ('should fail when given file size for given file exceeds 500KB', () => {
 
    expect(component.validateFile(fakeFile[1])).toBeFalsy();
  });
 
  it ('should succeed when given file size for given file don\'t exceed 500KB AND correct file type', () => {
 
    expect(component.validateFile(fakeFile[2])).toBeTruthy();
  });
});
