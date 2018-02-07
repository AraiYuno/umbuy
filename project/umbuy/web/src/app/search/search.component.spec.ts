<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
||||||| merged common ancestors
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

=======
>>>>>>> ac12cb6ede3e9155c257ab8d06d8e040957891fa
import { SearchComponent } from './search.component';
<<<<<<< HEAD
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
||||||| merged common ancestors

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
    fixture.detectChanges();
  });
=======
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('SearchComponent', () => {
    let component: SearchComponent; 
    let service: AdvertisementService;
  
    beforeEach(() => {
      
      service= new AdvertisementService(null);
      component= new SearchComponent(service);
  
    });
  
    it('should call the server save the changed when the method is called ', () => {
        //arrange
   let spy=spyOn(service, 'getSearchResultByTitle').and.callFake(t => {
         return Observable.empty();
     });
>>>>>>> ac12cb6ede3e9155c257ab8d06d8e040957891fa

<<<<<<< HEAD
  it('should able to put text when do keyup in the input field', () => {
    let testing ='book';
    let putInput = fixture.debugElement.query(By.css('.from-control'));
    putInput.triggerEventHandler('keyUp', 'testing');
    console.log(component.title);
    expect(component.title).toBe(testing);

  });
});
||||||| merged common ancestors
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
         component.getData();
         
          //assert
         expect(spy).toHaveBeenCalled();
  
     });
    
    /*it('should get the result return from the server', () => {
        let results={title: 'iphone',id:1};
        //arrange
      let spy=spyOn(service, 'getSearchResultByTitle').and.callFake(t => {
         return Observable.from([results]);
     });
       //Act
         component.getData();
         console.log(component.result);
    //assert
        expect(component.result.indexOf(results)).toBeGreaterThan(-1);
     });*/
    
  
    it('should set message property if server return and error', () => {
        let error='error';
        //arrange
      let spy=spyOn(service, 'getSearchResultByTitle').and.returnValue(Observable.throw(error));
       //Act
        component.getData();
        console.log(component.message);
    //assert
       expect(component.message).toBe(error);
     });
     
     //test onKey() 
    xit('should return the title when onkey method is calling', () => {
        let result=" ";
        //Act
        component.onKey(result);
        
   
    //assert
       expect(component.title).toBe("");
     });
    });
  
>>>>>>> ac12cb6ede3e9155c257ab8d06d8e040957891fa
