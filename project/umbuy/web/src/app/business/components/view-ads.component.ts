import { Component, OnInit, ElementRef} from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../../data_model/advertisement';
import { FilterResultService } from '../services/filterResult.service';
import { AllResultService } from '../services/allResult.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-ads-component',
  templateUrl: '../../presentation/html/view-ads.component.html',
  styleUrls: ['../../presentation/css/view-ads.component.scss']
})
export class ViewAdsComponent implements OnInit {

  advertisements: Advertisement[];
  filteredAds: Advertisement[];
  userProfile: any;
  profile: any;
  specificUser: boolean = false;
  //Testing Purposes
  test_shorted_description: string;
  message;

  constructor(private _advertisementService: AdvertisementService, private _filterResultService: FilterResultService, private _allResultService: AllResultService, public auth: AuthService) { }

  ngOnInit() {
    var currentUrl = window.location.pathname;
    var userId: string;
  
    if(currentUrl.indexOf("user") != -1){
      this.specificUser = true;
      userId = this.getAdvertisementId(currentUrl);
      
      this._advertisementService.getAdvertisementsByUserId(userId)
      .subscribe(
        res => this.advertisements = this.filteredAds = res,
        err => this.message = err,
        () => {this._filterResultService.changeMessage(this.filteredAds);
                this._allResultService.changeMessage(this.advertisements)}
      ); 
    }
    else{
      this._advertisementService.getAllAdvertisements()
      .subscribe(
        res => this.advertisements = this.filteredAds = res,
        err => this.message = err,
        () => {this._filterResultService.changeMessage(this.filteredAds);
                this._allResultService.changeMessage(this.advertisements)}
      ); 
    }
    
    this._filterResultService.currentMessage.subscribe(filteredAds => this.filteredAds = filteredAds);
      
    this.auth.getProfile((err, profile) => {
      this.userProfile = profile;
    });
    
  }

  /* Given the path name of the url (everything in url after port number or host name (if port is not there))
   * will return the advertisement id from the path name of the url.
   * Input: Will look something like /view/ads/user/:id
   * Output: id
   */
  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var userId: string;
   
    splittedParts = pathnameUrl.split("/");
    splittedParts_length = splittedParts.length;
    
    userId = splittedParts[splittedParts_length-1];
    
    return userId;
  }

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

}