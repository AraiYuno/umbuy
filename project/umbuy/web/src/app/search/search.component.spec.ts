import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { HttpClient } from '@angular/common/http';
import { AdvertisementService } from '../services/advertisement.service';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should able to put text when do keyup in the input field', () => {
    let testing ='book';
    let putInput = fixture.debugElement.query(By.css('.from-control'));
    putInput.triggerEventHandler('keyUp', 'testing');
    console.log(component.title);
    expect(component.title).toBe(testing);

  });
});
