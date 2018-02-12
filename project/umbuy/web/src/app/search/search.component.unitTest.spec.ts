import { SearchComponent } from './search.component';
import { AdvertisementService } from '../services/advertisement.service';
import { Observable } from 'rxjs/Observable';
import { AllResultService } from '../services/allResult.service';
import { FilterResultService } from '../services/filterResult.service';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Advertisement } from '../api/advertisement';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
describe('SearchComponent', () => {
    let component: SearchComponent;
    let service1: FilterResultService;
    let service2: AllResultService;
    let newAdevertisement: Advertisement;
    
    beforeEach(() => {
        //All service return simple Observable
        service1 = new FilterResultService();
        service2 = new AllResultService();
        component= new SearchComponent(service1,service2);


        this.newAdevertisement = [
            { 
            advertisementId: 1,
            userId: 1,
            title: 'iphone',
            description: 'A great iphone for a great price',
            price: 200,
            created_on: new Date('2018-02-02'),
            last_updated: new Date('2018-02-02'),
            deleted_on: null,
            imageUrl: 'http',
            category: 'electronic'
        },
        { advertisementId: 2,
            userId: 2,
            title: 'book',
            description: 'A great iphone for a great price',
            price: 100,
            created_on: new Date('2018-01-02'),
            last_updated: new Date('2018-01-02'),
            deleted_on: null,
            imageUrl: 'http',
            category: 'education'
        }
        ];

    });
    //test for shareMessage();
    it('should set fileter ads returned from the server', () => {
        // arrange part, want create fake 
        let spy=spyOn(service1, 'changeMessage').and.callFake(() => {
                return Observable.empty();
            });


         component.shareMessage();
          // assert
         expect(spy).toHaveBeenCalled();
    
     });
  
     //test for filter() with null values
    it('should find the Ads based on query', () => {

          
        // arrange part, want create fake 
        component.allAds = this.newAdevertisement;
         
        this.query='ip'; 
        component.filter();
    
          // assert
        expect(component.filteredAds).toContain(this.newAdevertisement[0]); 
         
    
    });

    it('should find all the Ads based on non-existing query', () => {

          
        // arrange part, want create fake 
        component.allAds = this.newAdevertisement;
         
        this.query='ips'; 
        component.filter();
    
          // assert
        expect(component.filteredAds).toBe(this.newAdevertisement); 
         
    
    });

    it('should find all the Ads based on empty query', () => {

          
        // arrange part, want create fake 
        component.allAds = this.newAdevertisement;
         
        this.query= ''; 
        component.filter();
          // assert
        expect(component.filteredAds).toBe(this.newAdevertisement); 
         
    
    });

    it('should find all the Ads based on null query', () => {    
        // arrange part, want create fake 
     
        component.allAds = this.newAdevertisement;
         
        this.query= null; 
        component.filter();
          // assert
        expect(component.filteredAds).toBe(this.newAdevertisement); 
        
    });

    it('should find length 0 array if allAds is empty', () => {    
        // arrange part, want create fake 
        console.log(this.newAdevertisement);
        component.allAds = [];
         
        this.query= null; 
        component.filter();
          // assert
        expect(component.filteredAds.length).toBe(0); 
        
    });

  


    
//    xit('should get the result return from the server', () => {
//         const results = {title: '1', id: 1};
//         // arrange
//       const spy = spyOn(adService, 'getSearchResultByTitle').and.callFake(t => {
//          return Observable.from([results]);
//      });
//        // Act
//          component.getData();
//          console.log(component.result);
//     // assert
//         expect(component.result.indexOf(results)).toBeGreaterThan(-1);
//      });

//     xit('should set message property if server return and error', () => {
//         const error = 'error';
//         // arrange
//       const spy = spyOn(adService, 'getSearchResultByTitle').and.returnValue(Observable.throw(error));
//        // Act
//         component.getData();
//         console.log(component.message);
//     // assert
//        expect(component.message).toBe(error);
//      });

 //test for fliterResultService.changeMessage 
//  it('should set search filer  with result return from the server', () => {

//     let filterAdvertisement=[
//       {id:1 ,title: 'a'},
//       {id:2, title: 'b'}
//     ]
//         // arrange part, want create fake 
//    spyOn(service1, 'changeMessage').and.callFake(() => {
//          return Observable.from([filterAdvertisement])
//      });


//          component.shareMessage();
//           // assert
//          expect(component.filteredAds).toBe(2);
//       console.log(component.filteredAds.length);
    });

  

