import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { ViewAdInformationComponent } from './view-ad-information.component';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;
  let advertisementService: AdvertisementService;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdInformationComponent ],
      providers: [UserService, AdvertisementService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(component, 'ngOnInit')
       .and.callThrough();
    expect(component).toBeTruthy();
  });
});