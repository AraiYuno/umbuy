import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';
import { Advertisement } from '../../data_model/advertisement';
import { NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: '../../presentation/html/delete.component.html',
  styleUrls: ['../../presentation/css/delete.component.scss']
})
export class DeleteComponent implements OnInit {
  advertisement: Advertisement;
  pathNameUrl: string;
  isDeleted: boolean;
  message: string;
  currentAdvertisementId: number;
  
  constructor(private _advertisementService: AdvertisementService, public auth: AuthService, private _router: Router ) {
    this.pathNameUrl = window.location.pathname;
   }
  
   ngOnInit() {
    this.currentAdvertisementId = parseInt(this.getAdvertisementId(this.pathNameUrl));

    this._advertisementService.deleteAdvertisementById(this.currentAdvertisementId)
      .subscribe(
        res => this.advertisement = res[0],
        err => this.message = err,
        () => this.backToHomePage()
        // () => this._userService.getUserById(this.advertisement.userId) TODO: might need for test
      )
  }

  /* Given the path name of the url (everything in url after port number or host name (if port is not there))
   * will return the advertisement id from the path name of the url.
   * Input: Will look something like /view/ads/:id
   * Output: id
   */
  getAdvertisementId(pathnameUrl: string){
    var splittedParts;
    var splittedParts_length: number;
    var id: string;
   
    splittedParts = pathnameUrl.split("/");
    splittedParts_length = splittedParts.length;
    
    id = splittedParts[splittedParts_length-1];

    return id;
  }

  backToHomePage(){
    this._router.navigate([""]);
  }
}