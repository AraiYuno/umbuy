import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../api/advertisement';
import { FilterResultService } from '../services/filterResult.service';
import { AllResultService } from '../services/allResult.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-ads-component',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit {

  advertisements: Advertisement[];
  filteredAds: Advertisement[];

  //Testing Purposes
  test_shorted_description: string;
  message;

  constructor(private _advertisementService: AdvertisementService, private _filterResultService: FilterResultService, private _allResultService: AllResultService) { }

  showReducedDescriptionLength(description, length){
    var reducedString;

    if(description.length < length){
      reducedString = description;
    }
    else{
      reducedString = description.substring(0, length);
      reducedString = reducedString + "...";
    }
    this.test_shorted_description = reducedString;
    return reducedString;
  }
  
  ngOnInit() {
    this._advertisementService.getAllAdvertisements()
      .subscribe(
        res => this.advertisements = this.filteredAds = res,
        err => this.message = err,
        () => {this._filterResultService.changeMessage(this.filteredAds);
                this._allResultService.changeMessage(this.advertisements)}
      );  
    this._filterResultService.currentMessage.subscribe(filteredAds => this.filteredAds = filteredAds);
    console.log(this.message);
  }

}