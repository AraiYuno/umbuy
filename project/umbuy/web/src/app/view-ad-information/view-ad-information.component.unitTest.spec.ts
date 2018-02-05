import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { ViewAdInformationComponent } from './view-ad-information.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [ ViewAdInformationComponent ],
      providers: [AdvertisementService, UserService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    advertisementService= new AdvertisementService(null);
    userService = new UserService(null);
    component= new ViewAdInformationComponent(advertisementService, userService);

    fixture = TestBed.createComponent(ViewAdInformationComponent);
    //component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ViewAdInformationComponent app when initiated', () => {
    expect(component).toBeTruthy();
  });

});