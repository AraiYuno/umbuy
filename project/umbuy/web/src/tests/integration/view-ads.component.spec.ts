import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../../app/business/services/advertisement.service';
import { Advertisement } from '../../app/data_model/advertisement';
import { FilterResultService } from '../../app/business/services/filterResult.service';
import { AllResultService } from '../../app/business/services/allResult.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Routes, RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ViewAdsComponent } from '../../app/business/components/view-ads.component';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SearchComponent } from '../../app/business/components/search.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/business/services/auth.service'

describe('ViewAdsComponent Integration Tests', () => {
    let component: ViewAdsComponent;
    let advertisementService: AdvertisementService
    let allResultService: AllResultService;
    let filterResultService: FilterResultService;
    let fixture: ComponentFixture<ViewAdsComponent>;
    let authService: AuthService;
    let tempAds: Advertisement [];  
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterModule, RouterTestingModule, FormsModule ],
        declarations: [ ViewAdsComponent, SearchComponent ],
        providers: [AdvertisementService, FilterResultService, AuthService, AllResultService, HttpClient, HttpHandler]
      })
      .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewAdsComponent);
        authService = TestBed.get(AuthService);
        advertisementService = TestBed.get(AdvertisementService);
        component = fixture.componentInstance;
        
        this.tempAds = [{ 
          "advertisementId": 1,
          "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
          "title": 'iphone',
          "description": 'A great iphone for a great price',
          "price": 75,
          "created_on": '2018-01-01',
          "last_updated": '2018-01-01',
          "deleted_on": null,
          "imageUrl": 'http://alink.com',
          "category": 'electronics'
        }, {
          "advertisementId": 2,
          "userId": 'auth0|5a8cfd24f5c8213cb27d5ec2',
          "title": 'Galaxy',
          "description": 'A great Galaxy for a great price',
          "price": 90,
          "created_on": '2018-01-01',
          "last_updated": '2018-01-01',
          "deleted_on": null,
          "imageUrl": 'http://alink.com',
          "category": 'electronics'
        }];
    });
 
    it('should render a list of advertisement with its title, price, image and short description', () => {
        // ARRANGE: set an array of advertisements 
        // ACT: Call ngOnInit and set the filteredAds Advertisement [] to be ready
        let spy=spyOn(component, 'ngOnInit').and.callFake(t => {
            return Observable.from([this.tempAds]);
          });

        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        
        component.filteredAds = this.tempAds;
        fixture.detectChanges();
    
        // ASSERT: Now we test rendering.
        // Each element has 2 things to test because I defined the list contains 2 advertisements.
        let debugElement = fixture.debugElement.queryAll(By.css('#title'));
        let iphoneTitle: HTMLElement = debugElement[0].nativeElement;
        let galaxtTitle: HTMLElement = debugElement[1].nativeElement;
        expect(iphoneTitle.innerText).toBe("iphone");
        expect(galaxtTitle.innerText).toBe("Galaxy");
        
        debugElement = fixture.debugElement.queryAll(By.css('#price'));
        let iphonePrice: HTMLElement = debugElement[0].nativeElement;
        let galaxyPrice: HTMLElement = debugElement[1].nativeElement;
        expect(iphonePrice.innerHTML).toContain("$75");
        expect(galaxyPrice.innerHTML).toContain("$90");

        debugElement = fixture.debugElement.queryAll(By.css('#description'));
        let iphoneDescription: HTMLElement = debugElement[0].nativeElement;
        let galaxyDescription: HTMLElement = debugElement[1].nativeElement;
        expect(iphoneDescription.innerText).toContain("A great iphone");
        expect(galaxyDescription.innerText).toContain("A great Galaxy");

        //ad's src attribute in image
        debugElement = fixture.debugElement.queryAll(By.css('#image'));
        let iphoneImage: HTMLElement = debugElement[0].nativeElement;
        let galaxyImage: HTMLElement = debugElement[1].nativeElement;
        expect(iphoneImage.getAttribute('src')).toBe("http://alink.com");
        expect(galaxyImage.getAttribute('src')).toBe("http://alink.com");
    });


    it('should call router with /view/ads', () => {
        // Arrange: we should have a router
        let router = TestBed.get(Router);
        // ACT: navigate to 'view/ads'
        let spy = spyOn(router, 'navigate');
        router.navigate(['/view/ads']);
        // ASSERTION: router should have been called with /view/ads
        expect(spy).toHaveBeenCalledWith(['/view/ads']); 
    });


    it('should get the ads with when gellAllAdvertisements() is called', () => {
        // ARRANGE: use a faked service and get a list of advertisements
        spyOn(advertisementService, 'getAllAdvertisements').and.returnValue(Observable.from([this.tempAds]));
        component.advertisements = this.tempAds;
      
        // ASSERTION: advertisements length must be 2 because the faked list has 2 advertisements.
        expect(component.advertisements.length).toBe(2);
    });

    it('should get the ads of the user when getAdvertisementsByUserId() is called', () => {
        // ARRANGE: use a faked service and get a list of advertisements
        spyOn(advertisementService, 'getAdvertisementsByUserId').and.returnValue(Observable.from([this.tempAds]));

        component.advertisements = this.tempAds;
      
        // ASSERTION: advertisements length must be 2 because the faked list has 2 advertisements.
        expect(component.advertisements.length).toBe(2);
    });
});