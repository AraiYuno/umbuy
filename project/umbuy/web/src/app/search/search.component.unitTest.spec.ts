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
import { AuthService } from '../auth/auth.service';

describe('SearchComponent Unit Tests', () => {
    let component: SearchComponent;
    let service1: FilterResultService;
    let service2: AllResultService;
    let authService: AuthService;
    let newAdevertisement: Advertisement;
    
    beforeEach(() => {
        //All service return simple Observable
        service1 = new FilterResultService();
        service2 = new AllResultService();
        authService = new AuthService(null);
        component= new SearchComponent(service1,service2, authService);


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
        }];
    });
    //test for shareMessage();
    it('should set fileter advertisement returned from the server', () => {
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
        component.allAds = [];
         
        this.query= null; 
        component.filter();
          // assert
        expect(component.filteredAds.length).toBe(0); 
        
    });

    });

  

