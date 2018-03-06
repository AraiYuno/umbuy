import { async, getTestBed, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend, JsonpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Advertisement } from '../../app/data_model/advertisement';
import { HttpParams } from '@angular/common/http';
import { AdvertisementService } from '../../app/business/advertisement.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';


describe('Service: AdvertisementService', () => {
    let backend: MockBackend;
    let service: AdvertisementService;

    let tempAds: Advertisement[];

     // ...testing variables
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ JsonpModule ],
            providers: [ BaseRequestOptions, MockBackend, AdvertisementService, HttpClient, HttpHandler,
                        { deps: [ MockBackend, BaseRequestOptions ], provide: Http,
                        useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }}]
        }).compileComponents();
    }));

    beforeEach(() => {
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(AdvertisementService);
        
        this.tempAds = [{ 
          "advertisementId": 1,
          "userId": 1,
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
          "userId": 1,
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
    //=============================================================================================
    // Author: Kyle
    //   create a utility function that allows us to establish how our fake server will respond.
    //=============================================================================================
    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === '/ads') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }
});
