import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdInformationComponent } from './view-ad-information.component';

describe('ViewAdInformationComponent', () => {
  let component: ViewAdInformationComponent;
  let fixture: ComponentFixture<ViewAdInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
