import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../api/advertisement';
import { Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-ads-component',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit {

  advertisements: Advertisement[];
  message;

  constructor(private _advertisementService: AdvertisementService) { }

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
        err => this.message = err,
      );  
      console.log(this.message);

  }

}
