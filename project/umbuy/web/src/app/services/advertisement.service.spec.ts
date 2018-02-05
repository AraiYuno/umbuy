import { TestBed, inject } from '@angular/core/testing';
import { AdvertisementService } from './advertisement.service';
import { HttpModule } from '@angular/http';

describe('AdvertisementService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AdvertisementService]
        });
    });

    /*it('should be created', inject([AdvertisementService], (service:AdvertisementService)=>{
        expect(service).toBeTruthy();
    }));*/
});