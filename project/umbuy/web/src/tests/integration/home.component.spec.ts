import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../../app/business/home.component';
import { SearchComponent } from '../../app/business/search.component';
import { FormsModule } from '@angular/forms';
import { ViewAdsComponent } from '../../app/business/view-ads.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../app/shared/auth.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SearchComponent, ViewAdsComponent ],
      imports: [FormsModule, RouterModule, RouterTestingModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
