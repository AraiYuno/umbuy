import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../api/advertisement';
import { SearchService } from '../services/search.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-view-ads-component',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit {

  advertisements: Advertisement[];

  constructor(private _advertisementService: AdvertisementService, private _shareSearchResultService: SearchService) { }

  showReducedDescriptionLength(description, length){
    var reducedString;

    if(description.length < length){
      reducedString = description;
    }
    else{
      reducedString = description.substring(0, length);
      reducedString = reducedString + "...";
    }
    return reducedString;
  }
  
  ngOnInit() {
    this._advertisementService.getAllAdvertisements()
      .subscribe(
        res => this.advertisements = res,
        err => console.error(err.status)
      );  
    this._shareSearchResultService.currentMessage.subscribe(message => this.advertisements = message);
  }

}
