import { Component, OnInit } from "@angular/core";

import { Advertisement } from '../api/advertisement';
import { AdvertisementService } from "../services/advertisement.service";

@Component({
    selector: "mobile-view-ads",
    moduleId: module.id,
    templateUrl: "./view-ads.component.html",
    providers: [AdvertisementService]
})
export class ViewAdsComponent implements OnInit {
    advertisements: Advertisement[];
    message;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private _advertisementService: AdvertisementService) { }

    ngOnInit(){
        this.extractData();
    }

    extractData(){
        this._advertisementService.getAllAdvertisements()
            .subscribe((result) => {
                this.advertisements = result;
            });
    }
}