import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailComponent } from '../../app/business/components/verify-email.component';
import { AuthService } from '../../app/business/services/auth.service';
import { Router } from '@angular/router';

describe('VerifyEmailComponent', () => {
  let component: VerifyEmailComponent;
  let fixture: ComponentFixture<VerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailComponent ],
      providers: [AuthService, { provide: Router, useClass: class { navigate = jasmine.createSpy("navigate")} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
