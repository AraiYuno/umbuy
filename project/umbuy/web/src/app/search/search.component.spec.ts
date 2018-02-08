/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchComponent } from './search.component';
import { AdvertisementService } from '../services/advertisement.service';
import { ShareSearchResultService } from '../services/shareSearchResult.service'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('SearchComponent', () => {
    let component: SearchComponent; 
    let adService: AdvertisementService;
    let shareService: ShareSearchResultService;
  
    beforeEach(() => {
      
      adService= new AdvertisementService(null);
      shareService = new ShareSearchResultService();
      component= new SearchComponent(adService, shareService);
  
    });
  
    it('should call the server save the changed when the method is called ', () => {
        //arrange
   let spy=spyOn(adService, 'getSearchResultByTitle').and.callFake(t => {
         return Observable.empty();
     });

         component.getData();
         
          //assert
         expect(spy).toHaveBeenCalled();
  
     });
    
    it('should get the result return from the server', () => {
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
     });
    
  
    it('should set message property if server return and error', () => {
        let error='error';
        //arrange
      let spy=spyOn(adService, 'getSearchResultByTitle').and.returnValue(Observable.throw(error));
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
  
*/