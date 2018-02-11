import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { HttpClient } from '@angular/common/http';
import { AdvertisementService } from '../services/advertisement.service';
import { FilterResultService } from '../services/filterResult.service';

describe('SearchComponent', () => {
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
    
    const INI_Adevertisement = { 
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
    };
    
  });

  it('should able to put text when do keyup in the input field', () => {
    let testing='iphone';
    fixture.detectChanges();
    let putInput = fixture.debugElement.query(By.css('.from-control'));
    putInput.triggerEventHandler('keyUp', 'testing');
    console.log(component.filteredAds);
    expect(component.filteredAds).toContain('iphone');

  });
});
