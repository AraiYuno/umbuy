import { Component, OnInit } from "@angular/core";
import { Advertisement } from '../../api/advertisement';
import { AdvertisementService } from "../../services/advertisement.service";
import { SearchComponent } from "../search/search.component";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FilterResultService } from '../../services/filterResult.service';
import { AllResultService } from '../../services/allResult.service';

@Component({
    selector: "mobile-view-ads",
    moduleId: module.id,
    templateUrl: "./view-ads.component.html",
    providers: [AdvertisementService, FilterResultService, AllResultService]
})
export class ViewAdsComponent implements OnInit {
    advertisements: Advertisement[];
    filteredAds: Advertisement[];
    message;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private _advertisementService: AdvertisementService, private _filterResultService: FilterResultService, private _allResultService: AllResultService) { }

    // TODO: Once advertisements is defined, every time we go back to the /view/ads routing,
    // it says that advertisements is undefined, but we can access the data (?)
    ngOnInit(){
        this._advertisementService.getAllAdvertisements()
        .subscribe(
            res => this.advertisements = this.filteredAds = res,
            err => this.message = err,
            () => { 
                    this._filterResultService.changeMessage(this.filteredAds);
                    this._allResultService.changeMessage(this.advertisements)}
          ); 
        this._filterResultService.currentMessage.subscribe(filteredAds => this.filteredAds = filteredAds);
    }
}